# Guía de Migración a Sanity

Ya tienes Sanity integrado en tu proyecto. Aquí tienes los pasos para completar la migración de tus datos.

## 1. Acceder al Studio
Ve a `/studio` en tu navegador para empezar a rellenar los datos. 
- **Configuración Global**: Aquí puedes poner el título, descripción SEO, los datos del Hero (presentación) y Sobre Mí.
- **Proyectos**: Crea un documento por cada proyecto.
- **Experiencia**: Crea un documento por cada puesto de trabajo.

## 2. Cómo usar los datos en tus componentes

He creado utilidades en `src/sanity/lib/queries.ts` para facilitar esto.

### Ejemplo en un Server Component (p.ej. `page.tsx`):

```tsx
import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { getLocalizedValue } from '@/sanity/lib/utils';

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>
          {getLocalizedValue(project.description, locale)}
        </div>
      ))}
    </div>
  );
}
```

## 3. Estructura de Traducciones
Para los campos traducibles, Sanity ahora te mostrará dos pestañas (Español e Inglés) gracias al tipo `locale-string` y `locale-text` que he configurado.

## 4. Imágenes
Puedes subir imágenes directamente a Sanity. Para usarlas en el front usa la utilidad `urlForImage` de `src/sanity/lib/image.ts`.

```tsx
import { urlForImage } from '@/sanity/lib/image';

<Image src={urlForImage(project.image).url()} ... />
```
