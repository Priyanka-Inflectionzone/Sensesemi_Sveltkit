import { smtpService } from './services/smtp.email.service';

//////////////////////////////////////////////////////////////

export const POST = async (event) => {
	const request = event.request;
	const data = await request.json();
    console.log(data)
    const emailDetails = {
        EmailTo: data.email,
        Subject: 'New Contact Form Submission',
        Body: `Hi, ${data.firstName}.<br> Greetings from Sensesemi Technologies.<br> Thank you for contacting us. We will get back to you soon.`,
      };

	const adminEmailDetails = {
	EmailTo: ['priyanka.kale@inflectionzone.com', 'priyankakale27@gmail.com'],
	Subject: 'New Contact Form Submission',
	Body: `Name: ${data.firstName} ${data.lastName}<br>Email: ${data.email}<br>Phone: ${data.phone}<br>Message: ${data.message}`,
	};

	try {
		console.log('Inside contact form submission...');
		const sendEmail = await smtpService(emailDetails, false)
		const sendAdminEmail = await smtpService(adminEmailDetails, false)
		return new Response(sendEmail.message);
	} catch (err) {
		console.error(`Error occurred while sending email: ${err.message}`);
		return new Response(err.message);
	}
};
