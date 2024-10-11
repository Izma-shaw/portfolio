import { FaGithub, FaYoutube , FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import profileImage from "/src/images/profile.png";
// nav link
export const links = [
    {
        url: "#home",
        text: "Home"
    },
    {
        url: "#features",
        text: "Features"
    },
    {
        url: "#resume",
        text: "Resume"
    },
    {
        url: "#services",
        text: "Services",
    },
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
        "url": "https://www.linkedin.com/in/ahmat-mahamat", // change it to your Linkedin profile link
        "show": true, // turn it to false if you don't have Linkedin
        "icon" : <FaLinkedin className="rounded-full" fill="black"/>
    },
    {
        "name": "Twitter",
        "url": "https://x.com/Ahmat_2000", // change it to your Twitter profile link
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
    profession: ['Freelancer', 'Developer', 'Pentester'],
    descriptionText :"Description à faire.",
    phoneNumber : "+33 7 58 64 42 87",
    email : "sowismael224@gmail.com",
    adress : "114 rue de lebisey, 14000 Caen, France",
}
// your professions
export const wordToType = ['Freelancer', 'Developer', 'Pentester'];

// description
export const descriptionText = "I am a self-taught programmer and passionate about cybersecurity.";
