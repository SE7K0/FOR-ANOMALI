function setParticles(color){

    particlesJS("particles-js",{

        particles:{

            number:{
                value:80
            },

            color:{
                value:color
            },

            shape:{
                type:"circle"
            },

            opacity:{
                value:0.5
            },

            size:{
                value:3
            },

            move:{
                enable:true,
                speed:2
            }

        },

        interactivity:{

            events:{

                onhover:{
                    enable:true,
                    mode:"repulse"
                }

            }

        }

    });

}