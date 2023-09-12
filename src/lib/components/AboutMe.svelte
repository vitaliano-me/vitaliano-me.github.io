<script lang="ts">
    import { MenuItemName } from "$lib/data/menu"

    export let offset = "4rem";
    export let aboutMeElement: HTMLElement;
</script>

<div bind:this={aboutMeElement}>
    <div
        class="offset-block"
        id={MenuItemName.aboutMe}
        style="--offset-size:{offset}"
        >
    </div>
    <div class="about-me">
        <h2>ABOUT ME</h2>
        <p>
            I am a passionate Software Engineer with over 18 years of experience in software development, project management, and team leadership.
        </p>
        <p>
            I'm driven by the challenge of solving problems and making a positive impact. That's why I'm always on the lookout for new opportunities to learn, grow, and contribute my expertise to innovative projects. Working towards these goals every day is what motivates me and keeps me happy.
        </p>
        <p>
            In addition to my technical expertise, I am a strong communicator and collaborative team player. I believe in building relationships based on trust, transparency, and mutual respect, and I enjoy mentoring and coaching others to help them achieve their full potential.
        </p>
        <p>
            If you are looking for a dedicated and experienced Software Engineer who can deliver results and drive innovation, please don't hesitate to reach out. I am always open to new connections and opportunities to make a positive impact.
        </p>
        <div class="social">
            <img src="about_me/linkedin.svg" alt="linkedin">
            <img src="about_me/gmail.svg" alt="gmail">
            <img src="about_me/whatsapp.svg" alt="whatsapp">
        </div>
    </div>
</div>

<style lang="scss">
    .about-me {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        font-family: 'Noto Sans', sans-serif;
        text-align: center;


        h2 {
            font-size: 3vmax;
        }
        
    }

    .social {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;

        img {
            height: 2rem;
        }

        // img[alt="gmail"] {
        //     height: 2vmax;
        // }
    }
</style>