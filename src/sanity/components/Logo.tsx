import React from 'react'

export const Logo = (props: any) => {
  const { renderDefault, title } = props
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 958 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M414.9,127.3L123.1,324c0,0-52.5,34.4-66.2,123.1v157c0,0,3,59.9,52,104l8.8,8.8l69,48.8l-30.8-64.1 c0,0-28.4-67.2,19.2-100.6l354.1-241.3c0,0,25.8-21.5,25.7-62.3v-91.3C554.9,206.2,529.7,83.1,414.9,127.3z"
          fill="#00FFC3"
        />
        <path 
            d="M572,574.9h-51.2c-14.9,0-27-12.1-27-27v-51.2c0-14.9,12.1-27,27-27H572c14.9,0,27,12.1,27,27v51.2 C599,562.9,586.9,574.9,572,574.9z" 
            fill="#00FFC3"
        />
      </svg>
      {renderDefault && renderDefault(props)}
    </div>
  )
}
