<script>
import About from "../components/About.svelte";
import Carousel from "../components/Carousel.svelte";
import Contactus from "../components/Contactus.svelte";
import Faqs from "../components/Faqs.svelte";
import Footer from "../components/Footer.svelte";
import Ikigai from "../components/Ikigai.svelte";
import Leadershipteam from "../components/Leadershipteam.svelte";
import Navbar from "../components/Navbar.svelte";
import Oursolution from "../components/Oursolution.svelte";
import Ourusers from "../components/Ourusers.svelte";
import Visionmission from "../components/Visionmission.svelte";
import Whyus from "../components/Whyus.svelte";

let submissions = [];

const handleFormSubmit = async(event) => {

const formData = event.detail;
if(formData){
    console.log("Form data received...")
    console.log("Form data: ", formData)
}
const response = await fetch(`/api/`, {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: { 'content-type': 'application/json' }
});
submissions = [...submissions, formData];
};

</script>

<main>
    {#each submissions as submission}
    <div>
    <p>Name: {submission.firstName} {submission.lastName}</p>
    <p>Email: {submission.email}</p>
    <p>Phone: {submission.phone}</p>
    <p>Message: {submission.message}</p>
    </div>
    {/each}
<Navbar/>
<Carousel/>
<About/>
<Visionmission/>
<Whyus/>
<Oursolution/>
<Leadershipteam/>
<Ourusers/>
<Ikigai/>
<Faqs/>
<Contactus on:contactFormSubmit={handleFormSubmit}/>
<Footer/>
</main>
