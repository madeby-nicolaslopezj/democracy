i18n.map('es', {
  lib: {
    votes: 'Votos',
    notLoggedInAlert: 'Necesitas autenticarte',
    login: 'Autenticarse',
    verifyEmail: 'Necesitas verificar el email',
    resendVerificationEmail: 'Reenviar email de verificación',
    yes: 'Si',
    no: 'No',
    abstention: 'Abstención',
    viewTopic: 'Discutir',
    login: 'Autenticarse',
    logout: 'Desconectarse'
  },
  errors: {
    emailNotEndsWith: 'El email debe terminar con {$1}',
    emailLinkExpired: 'El link de verificación ha vencido',
    questionNotExists: 'Esta pregunta no existe',
    alreadyVoted: 'El usuario ya votó'
  },
  emails: {
    verifyEmail: {
      subject: 'Confirmar Email',
      text: 'Hola {$1}!,\n\nPara verificar tu email, simplemente haz click en el siguente link.\n\n{$2}\n\nGracias.\n'
    },
    resetPassword: {
      subject: 'Reiniciar Contraseña',
      text: 'Hola {$1}!,\n\nPara reiniciar tu contraseña haz click en el siguente link.\n\n{$2}\n\nGracias.\n'
    },
    newTopic: {
      subject: 'Nuevo Tema',
      text: 'Hola {$1}!,\n\nHay un nuevo tema para discutir, puedes hacerlo en el siguente link.\n\n{$2}\n\nGracias.\n'
    }
  },
  dictionary: {
    basic: {
      title: 'Título del sitio'
    },
    footer: {
      title: 'Título en el footer',
      text: 'Texto en el footer',
      pagesTitle: 'Título de las páginas en el footer'
    }
  },
  pages: {
    schema: {
      content: 'Contenido'
    }
  },
  topics: {
    singularName: 'tema',
    pluralName: 'temas',
    title: 'Temas',
    schema: {
      title: 'Título',
      description: 'Descripción',
      slug: 'Url',
      hidden: 'Desactivado',

    }
  },
  questions: {
    singularName: 'pregunta',
    pluralName: 'preguntas',
    title: 'Preguntas',
    schema: {
      topic: 'Tema',
      title: 'Pregunta',
      
    }
  },
  votes: {
    singularName: 'voto',
    pluralName: 'votos',
    title: 'Votos',
  }
});