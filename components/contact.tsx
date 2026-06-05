"use client";

import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const contactLinks = [
	{
		icon: Mail,
		label: "Email",
		href: "https://mail.google.com/mail/?view=cm&fs=1&to=vasupradha.1011@gmail.com",
	},
	{
		icon: Phone,
		label: "Call",
		href: "tel:+919025352164",
	},
	{
		icon: MapPin,
		label: "Bangalore, IN",
		href: "#",
	},
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/vasupradharamac",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/vasupradha-r/",
	},
	{
		icon: Twitter,
		label: "Twitter",
		href: "https://x.com/RVasupradha",
	},
];

const Contact = () => (
	<footer className="w-full py-8 bg-muted/30">
		<div className="container mx-auto px-4 flex flex-col items-center">
			<div className="flex flex-wrap justify-center items-center gap-6 mb-4">
				{contactLinks.map((item, idx) => (
					<a
						key={idx}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
					>
						<item.icon className="h-5 w-5" />
						<span>{item.label}</span>
					</a>
				))}
			</div>
			{/* <Button
      size="lg"
      variant="outline"
      className="rounded-full"
      onClick={() =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=vyasmayank963@gmail.com",
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      Contact Me
    </Button> */}
		</div>
		<div className="text-center text-sm text-muted-foreground mt-4">
			Made with{" "}
			<span className="text-red-500">♥</span> by Vasupradha R
		</div>
	</footer>
);

export default Contact;
