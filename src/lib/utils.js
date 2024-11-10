import { FaGithub, FaYoutube , FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import profileImage from "/src/images/profile.png";
// nav link
export const links = [
    {
        url: "#accueil",
        text: "Accueil"
    },
    {
        url: "#features",
        text: "Compétences"
    },
    {
        url: "#resume",
        text: "Expériences"
    },
    // {
    //     url: "#services",
    //     text: "Services",
    // },
    {
        url: "#contact",
        text: "Contact"
    },
];

// social media
export const media = [
    {
        "name": "Github",
        "url": "https://github.com/Izma-shaw", // change it to your Github profile link
        "show": true, // turn it to false if you don't have Github
        'icon' : <FaGithub fill="black"/>
    },
    {
        "name": "Linkedin",
        "url": "https://www.linkedin.com/in/sow-ismael-11871a140/", // change it to your Linkedin profile link
        "show": true, // turn it to false if you don't have Linkedin
        "icon" : <FaLinkedin className="rounded-full" fill="black"/>
    },
    {
        "name": "Twitter",
        "url": "", // change it to your Twitter profile link
        "show": true, // turn it to false if you don't have Twitter
        "icon" : <FaTwitter fill="black"  />
    },
    {
        "name": "Youtube",
        "url": "", // add your Youtube channel link
        "show": false, // turn it to true if you have Youtube
        "icon" : <FaYoutube fill="black"  />
    },
    {
        "name": "Facebook",
        "url": "", // add your facebook profile link
        "show": false, // turn it to false if have Facebook
        "icon" : <FaFacebook fill="black" />
    },
];

// update this variable with your data
export const userData = {
    name: "Ismael",
    image: profileImage, // you need to put your image in /src/images with the name profile.png
    profession: ['Data Scientist', 'Data Analyst', 'Data Engineer', 'Machine Learning'],
    descriptionText: "Actuellement en Master 2 Informatique Algorithmes et Systèmes Intelligents orienté vers la science des données à l'Université de Caen Normandie, je recherche un stage de fin d'études de 4 à 6 mois à partir de mars 2025. Passionné par la science des données et l'intelligence artificielle, je souhaite participer à des projets innovants en data science pour mettre en pratique mes compétences. J'ai acquis une solide expérience en gestion et transformation de grandes quantités de données (Pandas, Numpy, SQL), en modélisation prédictive, ainsi qu'en développement de modèles de machine learning et deep learning (TensorFlow, Keras, PyTorch). Je possède également des connaissances en visualisation de données et en vision par ordinateur. Curieux, motivé, et doté d'un bon esprit d'initiative, je suis prêt à relever des défis et à contribuer au succès des projets sur lesquels je travaillerai.",
    phoneNumber : "+33 7 58 64 42 87",
    email : "sowismael224@gmail.com",
    adress : "114 rue de lebisey, 14000 Caen, France",
}
// your professions
export const wordToType = ['Data Scientist', 'Data Analyst', 'Data Engineer', 'Machine Learning'];

// description
export const descriptionText = "";
