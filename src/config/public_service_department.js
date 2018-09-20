var config = {
	"API" : {

		"xsjs" : {

		}, 

		"map" : {

		}
	},


	"UI" : {

		"home" : {
			"navbar" : "Public Service Department",

			"leftbutton" : {
				"logo": "building-o",
				"text": "Facilities"
			},

			"rightbutton" : {
				"logo": "book",
				"text": "Courses"
			}
		},

		"map_screen" : {
			"alert" : {
				"title": "Easy Information",
				"message": "The map shows nearby facilities where you can register for new courses!"
			},

			"button" : "Register Interest",

			"form" : {
				"logo" : "pencil",
				"info" : "Please fill in the required fields below and we will get back to you shortly",
				"firstqn" : "Course",
				"secondqn" : "Available Timing (Click to change)",
				"button" : "Confirm Booking"
			}
		},

		"qr_code" : {
			"title" : "Course Attendance"
		}
	},

	"Chatbot" : [
		{"qn": "What are the next courses coming up?", 
		 "ans": "There will be a special programme on ecommerce catered for 16-18 years old. Stay tuned!"
		},

		{
		 "qn": "How do I attend a course?",
		 "ans": "Click on home and couses respectively to signup for a course. Once you have registered, you can click on profile to see the course. Click on that to get a QR Code which you can then use to record your attendance for the course!"
		},

		{
			"qn": "What are the courses in my vicinity?",
			"ans": "Show Map"
		},

		"qr_code" : {
			"title" : "Course Attendance"
		}
	]
}


module.exports = config;