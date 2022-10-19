// opciones => Informacion personal, Frontend skills, backend skills, databases skills, ui/ux skills

const myInfo = [
  {
    title: 'Información personal',
    description: 'Desarrollador hace mas de 5 años con experiencia en backend y frontend ademas de aplicaciones moviles'
  },
  {
    title: 'Frontend skills',
    description: 'Una descripcion corta de que es lo mas importante que hicieron en frontend', // Una descripcion corta de que es lo mas importante que hicieron en frontend
    skills: [
      {
        title: 'React',
        description: 'Proyectos de e-commerce'
      },
      {
        title: 'HTML',
        description: 'Proyectos de e-commerce'
      },
      {
        title: 'CSS',
        description: 'Proyectos de e-commerce'
      }
    ]
  },
  {
    title: 'Backend skills',
    description: 'Una descripcion corta de que es lo mas importante que hicieron en backend', // Una descripcion corta de que es lo mas importante que hicieron en frontend
    skills: [
      {
        title: 'Node js',
        description: 'Proyectos de e-commerce'
      },
      {
        title: 'Microservicios',
        description: 'Proyectos de e-commerce'
      }
    ]
  },
  {
    title: 'Databases skills',
    description: 'Una descripcion corta de que es lo mas importante que hicieron en frontend', // Una descripcion corta de que es lo mas importante que hicieron en frontend
    skills: [
      {
        title: 'Mongo',
        description: 'Proyectos de e-commerce'
      },
      {
        title: 'Postgres',
        description: 'Proyectos de e-commerce'
      }
    ]
  },
  {
    title: 'UI/UX skills',
    description: 'Una descripcion corta de que es lo mas importante que hicieron en frontend', // Una descripcion corta de que es lo mas importante que hicieron en frontend
    skills: [
      {
        title: 'Figma',
        description: 'Proyectos de e-commerce'
      },
      {
        title: 'Adobe XD',
        description: 'Proyectos de e-commerce'
      }
    ]
  }
]

function getOptions() {
  return myInfo.map((value) => value.title)
}

export {
  getOptions,
  myInfo
}