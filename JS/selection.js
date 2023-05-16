

const array3 = [ 
    { 
      image: './images/photo-2.jpg',
      title: 'Contabilidad General',
      text: 'Un servicio de contabilidad para proporcionar información financiera a los clientes.',
      link: 'More Info.'
    },
  {
      image: './images/photo-4.jpg',
      title: 'Contabilidad Analítica',
      text: 'Un servicio de contabilidad para identificar áreas de mejora y hacer recomendaciones para la optimización de los recursos.',
      link: 'More Info..'
  },
  {
      image: './images/photo-3.jpg',
      title: 'Contabilidad de Costos',
      text: 'Un servicio de contabilidad para identificar los costos y gastos e informar sobre la eficiencia de los procesos.',
      link: 'More Info..'
  },
  { 
      image: './images/photo-5.jpg',
      title: 'Contabilidad Financiera',
      text: 'Un servicio de contabilidad para proporcionar información financiera a los clientes.',
      link: 'More Info..'
  },
  {
      image: './images/photo-1.jpg',
      title: 'Contabilidad de Inventario',
      text: 'Un servicio de contabilidad para proporcionar información sobre el inventario y los costos asociados.',
      link: 'More Info..'
  },
  {
      image: './images/photo-6.jpg',
      title: 'Contabilidad de Impuestos',
      text: 'Un servicio de contabilidad para proporcionar información sobre los impuestos y asesoramiento para la preparación de declarativa',
      link: 'More Info..'
  },
  {
      image: 'https://images.pexels.com/photos/6863280/pexels-photo-6863280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Contabilidad fiscal',
      text: 'preparación de declaraciones de impuestos y asesoramiento fiscal para empresas y particulares.',
      link: 'More Info..'
  },
  {
      image: 'https://blog.hubspot.es/hubfs/media/auditoriainterna.jpeg',
      title: 'Auditoría',
      text: ' revisión de los registros financieros de una empresa para asegurarse de que sean precisos y cumplan con las leyes y regulaciones aplicables.',
      link: 'More Info..'
  },
  {
      image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHrmyBGbLBG4/v0/-1x-1.jpg',
      title: 'Contabilidad forense',
      text: 'investigación de fraudes financieros y otros delitos económicos.',
      link: 'More Info..'
  },
  {
      image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Consultoría de negocios',
      text: 'asesoramiento en gestión financiera, planificación estratégica, marketing y otros aspectos de la gestión empresarial.',
      link: 'More Info..'
  },
]



selectionAsesoria.innerHTML = 
`

        <div class="background">
        <a class="back-to-home" href="./"> <<< Volver al Inicio</a>
        <h1>Selecciona el Tipo de Asesoria</h1>
        <div class="selection-type-container">
        
          ${array3.map(item => {
            return (`
            <div class="type-card">
                <a href="./registration.html">
                    <img src="${item.image}" alt="" class="selection-img">
                    <h2>${item.title}</h2>
                    <span></span>
                </a>
            </div>
            `)
          }).join("")}
          
        </div>
        </div>
`;

footer.innerHTML = 
`
        <div class="footer-logo">
            <h2>Accountanter </h2>
        </div>
        <div class="footer-text">
            <div class="div1">
                <a href="#" class="footerGoToHome">Home</a>
                <ul>
                    <li class="footerSocial"><a href=""><i class="bi bi-facebook"></i></a></li>
                    <li class="footerSocial"><a href=""><i class="bi bi-twitter"></i></a></li>
                    <li class="footerSocial"><a href=""><i class="bi bi-instagram"></i></a></li>
                </ul>
            </div>
            <div class="div2">
                <p>Made By <em>Maximiliano Imanol Aguer</em><br> 2023 ©</p>
            </div>
        </div>
`;


