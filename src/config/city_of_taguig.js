var config = {
	"API" : {

		"xsjs" : {

		}, 

		"map" : {

		}
	},


	"UI" : {

		"home" : {
			"navbar" : "City of Taguig",

			"leftbutton" : {
				"logo": "hospital-o",
				"text": "Medical"
			},

			"rightbutton" : {
				"logo": "book",
				"text": "District Programs"
			}
		},

		"map_screen" : {
			"alert" : {
				"title": "Easy Booking",
				"message": "The map shows hospitals/clinics near your vicinity. Click on the markers for more details or book an appointment"
			},

			"button" : "Book Appointment",

			"form" : {
				"logo" : "ambulance",
				"info" : "Please fill in the required fields below and we will get back to you shortly",
				"firstqn" : "Condition",
				"secondqn" : "Appointment Timing (Click to change)",
				"button" : "Confirm Booking"
			}
		},

		"qr_code" : {
			"title" : "Event Redemption"
		}
	},

	"Chatbot" : [
		{"qn": "What are the next programs coming up?", 
		 "ans": "There will be a scholarship programme catered for 16-18 years old. Stay tuned!"
		},

		{
		 "qn": "How do I attend a program?",
		 "ans": "Click on home and programs respectively to register for a program. Once you have registered, you can click on profile to see the program. Click on that to get a QR Code which you can then use to record your attendance for the event!"
		},

		{
			"qn": "What are the programs in my vicinity?",
			"ans": "Show Map"
		}
	]
}


module.exports = config;