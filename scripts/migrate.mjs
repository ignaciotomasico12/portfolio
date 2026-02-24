import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// Configuración del cliente con token de escritura
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // Necesitas un token con permisos de escritura
  useCdn: false,
});

async function migrate() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN no encontrado en el archivo .env');
    console.log('Por favor, crea un token con permisos de Editor en https://manage.sanity.io/ y añádelo a tu .env');
    return;
  }

  try {
    const es = JSON.parse(fs.readFileSync('./src/messages/es.json', 'utf8'));
    const en = JSON.parse(fs.readFileSync('./src/messages/en.json', 'utf8'));

    console.log('🚀 Empezando migración...');

    // 1. Migrar Configuración Global
    const globalDoc = {
      _id: 'global',
      _type: 'global',
      title: es.global.metadata.title,
      metadata: {
        title: { es: es.global.metadata.title, en: en.global.metadata.title },
        description: { es: es.global.metadata.description, en: en.global.metadata.description },
      },
      hero: {
        title: es.hero.title,
        subtitle: { es: es.hero.subtitle, en: en.hero.subtitle },
        words: {
          es: Object.values(es.hero.subtitle_words),
          en: Object.values(en.hero.subtitle_words),
        },
        description: { es: es.hero.description, en: en.hero.description },
      },
      about: {
        title: { es: es.about.title, en: en.about.title },
        paragraphs: {
          es: Object.values(es.about.description),
          en: Object.values(en.about.description),
        },
      },
      social: {
        github: 'https://github.com/ignaciotomasico12',
        linkedin: 'https://www.linkedin.com/in/ignacio-tomas',
        email: 'ignaciotomasico12@gmail.com',
      }
    };

    await client.createOrReplace(globalDoc);
    console.log('✅ Configuración Global migrada');

    // 2. Migrar Experiencia
    const experiences = ['ntt', 'avanade', 'trendico'];
    for (let i = 0; i < experiences.length; i++) {
        const key = experiences[i];
        const expEs = es.experience[key];
        const expEn = en.experience[key];

        const doc = {
            _type: 'experience',
            company: expEs.name,
            order: experiences.length - i,
            role: { es: expEs.role, en: expEn.role },
            location: { es: expEs.location, en: expEn.location },
            dates: { es: expEs.dates, en: expEn.dates },
            responsibilities: {
                es: Object.values(expEs.responsibilities),
                en: Object.values(expEn.responsibilities),
            },
            skills: Object.values(expEs.skills),
        };
        await client.create(doc);
        console.log(`✅ Experiencia en ${expEs.name} migrada`);
    }

    // 3. Migrar Proyectos
    const projects = ['project1', 'project2', 'project3'];
    for (let i = 0; i < projects.length; i++) {
        const key = projects[i];
        const pEs = es.projects[key];
        const pEn = en.projects[key];

        const doc = {
            _type: 'project',
            title: pEs.title,
            order: i + 1,
            description: { es: pEs.description, en: pEn.description },
            // Las imágenes y tags se tendrán que editar manualmente para subirlas bien a Sanity
            technologies: i === 0 ? ['React', 'Next JS', 'Chakra UI', 'Sanity', 'Sass'] : 
                         i === 1 ? ['TypeScript', 'Node JS', 'React', 'Tailwind', 'React Query'] :
                         ['TypeScript', 'Next JS', 'React', 'Tailwind', 'Supabase', 'Groq AI'],
        };
        await client.create(doc);
        console.log(`✅ Proyecto ${pEs.title} migrado`);
    }

    console.log('\n✨ Migración completada con éxito.');
    console.log('Nota: Recuerda subir las imágenes manualmente en /studio para que se vean correctamente.');

  } catch (err) {
    console.error('❌ Error durante la migración:', err);
  }
}

migrate();
