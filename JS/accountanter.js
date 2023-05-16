import { array, array2 } from './data.js';
// let navBar = document.querySelector('.navbar');
let arr = [...array];
let services = [...array2];
console.log(arr)


let acc = 'Accountanter';

nav.innerHTML =
    `
  <div class="logo">
   <img src="https://www.acc200.co.za/sites/acc200_co_za/files/header_logo/ACC.png" alt="logoimg" class="logo-img">    <p>${acc}</p>
  </div>
  
  <ul>
   <li class="navBtn"><a href="./selection.html">Buscar Asesoria</a></li>
   <li class="navSocial"><a href="https://www.facebook.com" target="_blank" ><i class="bi bi-facebook"></i></a></li>
   <li class="navSocial"><a href="https://twitter.com" target="_blank" ><i class="bi bi-twitter"></i></a></li>
   <li class="navSocial"><a href="https://www.instagram.com" target="_blank" ><i class="bi bi-instagram"></i></a></li>   
   <li class="navBtn"><a href="https://web.whatsapp.com" target="_blank">Call Us</a></li>
  </ul>
`

hero.innerHTML =
    `
<div class="opacity-background">
<div class="hero-container" >
 <h1 class="hero-title">Contabilidad en Resistencia Chaco</h1>
 <h4>
 <mark>Desde ${acc}, nos enorgullece ofrecer servicios de alta calidad en la gestión de los aspectos financieros de tu negocio. Ubicados en el Departamento de Libertad, provincia de Chaco, nuestro equipo de expertos contadores trabaja incansablemente para brindarte soluciones personalizadas que se adapten a las necesidades de tu empresa.
 </h4>
 </div>
</div>
`;





reviews.innerHTML =
    `
<div class="reviews-container">
<p class="review">Me gusta trabajar con Accountanter en Chaco, La empresa es muy responsable, profesional y eficiente. Siempre recibo el mejor asesoramiento para mis necesidades contables.</p>
<span>- Roberto Ramirez, Provincia del Chaco</span>
<span>
<lord-icon
    src="https://cdn.lordicon.com/mdgrhyca.json"
    trigger="morph"
    colors="primary:#eee966,secondary:#08a88a"
    style="width:25px;height:25px">
</lord-icon>
<lord-icon
    src="https://cdn.lordicon.com/mdgrhyca.json"
    trigger="morph"
    colors="primary:#eee966,secondary:#08a88a"
    style="width:25px;height:25px">
</lord-icon>
<lord-icon
    src="https://cdn.lordicon.com/mdgrhyca.json"
    trigger="morph"
    colors="primary:#eee966,secondary:#08a88a"
    style="width:25px;height:25px">
</lord-icon>
<lord-icon
    src="https://cdn.lordicon.com/mdgrhyca.json"
    trigger="morph"
    colors="primary:#eee966,secondary:#08a88a"
    style="width:25px;height:25px">
</lord-icon>
<lord-icon
    src="https://cdn.lordicon.com/mdgrhyca.json"
    trigger="morph"
    colors="primary:#eee966,secondary:#08a88a"
    style="width:25px;height:25px">
</lord-icon>
</span>
</div>
`;


features.innerHTML =
    `
        <div class="features-container">
          ${arr.map(item => {
        return (`
            <div class="features-card">
                <div class="feature-image-container">
                <img src='${item.image}' alt="feature-Image" class="feature-img">
                </div>
                <h2 class="feature-title">
                ${item.title}
                </h2>
                <p class="feature-text">
                ${item.text}
                </p>
                <a href="./selection.html" class="featureBtn">
                <button>${item.link}</button>
                </a>
            </div>
            `)
    }).join("")}
        </div>
`;
{/* <img src="./images/about.jpeg" alt="about-image"></img> */ }
{/* <img src="./images/giphy.gif" alt="about-image"></img> */ }

about.innerHTML =
    `
        <div class="about-1">
            <video src="./videos/pexels-video.mp4" autoplay loop>
        </div>
        <div class="about-2">
            <h2>Accountanter: Servicios de Contabilidad para su Negocio.</h2>
            <p>
                Accountanter ofrece servicios contables para empresas de todos los tamaños. Nuestro equipo de profesionales experimentados ofrece una variedad de servicios que van desde la contabilidad y la nómina hasta la preparación de impuestos y la planificación financiera. Entendemos las necesidades únicas de su empresa y nos esforzamos por brindar los servicios más eficientes y precisos. Nuestras aplicaciones de contabilidad en la nube y el almacenamiento seguro de datos nos permiten proporcionarle información financiera precisa y actualizada cuando la necesite. Contáctenos hoy para una consulta gratuita y descubra cómo Accountanter puede ayudar a hacer crecer su negocio.
            </p>
            <a href=""><button>Contact.</button></a>
        </div>
`;

let servicios = document.querySelector("#services")
servicios.innerHTML =
    `
<h2>Detalles y Caracteristicas</h2>
        <div class="services-container">
          ${services.map(item => {
        return (
            `
            <div class="services-card">
               <div class="services-img-container"><img src="${item.image}" alt="services-image" class="services-img"></div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <a href=""><button>${item.link}</button></a>
            </div>
            `
        )
    }).join("")}
        </div>
`;


contact.innerHTML =
    `
<div class="contact-container">
<div class="contact-text">
<h3>Contáctenos</h3>
<p>Rellene el siguiente formulario y nos pondremos en contacto con usted en breve!</p>
<lord-icon
    src="https://cdn.lordicon.com/zpxybbhl.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#08a88a"
    style="width:250px;height:250px">
    class="icon-contact"
</lord-icon>
</div>
<div class="form-container">
<form action="">
            <div class="inputs-1">
            <label for="">Nombre: </br> <input type="text"> </label>
            <label for="">E-mail: </br> <input type="email"> </label>
            </div>
            <div class="inputs-2">
            Mensaje: </br>
            <textarea name="textarea" id="textarea" cols="auto" rows="8"></textarea>
            </div>
            <div class="inputs-3">
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <button>Enviar</button>
            </div>
</form>

</div>
</div>
`;


locationMap.innerHTML =
    `
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56644.41810538125!2d-58.99534525000001!3d-27.460661499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c62a6f5f70b%3A0xf03ac86511c2cd6d!2sResistencia%2C%20Chaco!5e0!3m2!1ses!2sar!4v1681006791748!5m2!1ses!2sar"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
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



document.querySelector(".sidebar .toggle-btn").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("active");
});

