import React from "react";
import { Link, useNavigate } from "react-router-dom";


function About() {

    const navigate = useNavigate();
    return (

        <div className="text-2xl font-black text-white font-serif text-ellipsis">
             <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-white text-2xl"
        ></Link>{" "}
        <h1>About Me</h1>
        
        <p className="relative">
        About Me

Namaste! Mera naam Roney hai. Main ek passionate aur creative software developer hoon jo naye challenges ko explore karna aur solutions create karna pasand karta hoon. Meri journey programming ki duniya mein kuch saalon se shuru hui hai aur main har din naye technologies aur techniques seekhne mein interested hoon.

Maine apne career mein alag-alag projects par kaam kiya hai jahan maine web development, mobile app development aur machine learning jaise kshetron mein kaam kiya hai. Har project ek nayi learning experience hoti hai aur mujhe yeh maza deta hai ki main apne skills ko har roz improve kar raha hoon.

Is project ko complete karke mujhe bahut khushi mili hai aur main ummeed karta hoon ki yeh mere skills aur creativity ka ek accha pratinidhitva hai. Agar aapko mera kaam pasand aaya ho toh mujhe feedback zarur dijiyega. Main hamesha naye projects aur opportunities ke liye taiyar hoon!

Dhanyavaad,
Roney
        </p>
    </div>

    );

}

export default About;