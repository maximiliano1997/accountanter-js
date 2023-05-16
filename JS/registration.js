


registration.innerHTML = 
`
<div class="image-companion" ><a class="back-to-home" href="./"> <<< Volver al Inicio</a></div>
<div class="container">
    <header class="header">
      <h1 id="title" class="text-center"> Completa el Formulario</h1>
      <link rel="stylesheet" href="styles.css">
      <p id="introduction" class="description text-center">
      </p>
    </header>

    <form id="survey-form">
      <div class="form-group">
        <label id="name-label" for="name">Nombre de la empresa/individuo</label>
        <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label id="email-label" for="email">Email</label>
        <input type="email" name="email" id="email" class="form-control" placeholder="Enter your Email" required>
      </div>
      <div class="form-group">
        <label id="number-label" for="number">Fecha de inicio de actividades <span class="clue">(Optional)</span></label>
        <input type="number" name="age" id="number" min="10" max="99" class="form-control" placeholder="Age">
      </div>
      <div class="form-group">
        <p>Tipo de Negocio</p>
        <select id="dropwdown" name="role" class="form-control" required>
          <option disabled selected value>Selecciona una opcion</option>
          <option value="student">Emprendedor</option>
          <option value="job">Empresa unipersonal</option>
          <option value="learner">sociedad anónima</option>
          <option value="preferNo">Sociedad de responsabilidad limitada</option>
          <option value="other">Otro..</option>
        </select>
      </div>



      <div class="form-group">
        <p>Información sobre el tamaño de la empresa</p>
        <label>
          <input name="user-recommend" value="definitely" type="radio" class="input-radio" checked> Grande > 100 Empleados
        </label>
        <label>
          <input name="user-recommend" value="maybe" type="radio" class="input-radio"> Mediana > 20 Empleados
        </label>
        <label>
          <input name="user-recommend" value="not-sure" type="radio" class="input-radio"> Pequeña > 5
        </label>
      </div>



      <div class="form-group">
        <p>Selecciona nuevamente para confirmar el Servicio</p>
        <select id="most-like" name="mostLike" class="form-control" required>
          <option disabled selected value>Selecciona una Opcion</option>
          <option value="challenges">Contabilidad General</option>
          <option value="projects">Contabilidad Analitica</option>
          <option value="community">Contabilidad de Costos</option>
          <option value="opensource">Contabilidad Financiera</option>
          <option value="opensource">Contabilidad de Impuestos</option>
          <option value="opensource">Contabilidad de Fiscal</option>
          <option value="opensource">Contabilidad Forense</option>
          <option value="opensource">Auditoria</option>
          <option value="opensource">Consultoria de Negocios</option>
        </select>
      </div>

      <div class="form-group">
        <button type="submit" id="submit" class="submit-button">Enviar</button>
      </div>
    </form>
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
