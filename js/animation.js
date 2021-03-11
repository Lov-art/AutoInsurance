
if (window.innerWidth > 1024) {
	function animateFrom(elem, direction) {
		direction = direction | 1;

		var x = 0,
			y = direction * 100;
		if (elem.classList.contains("gs_reveal_fromLeft")) {
			x = -100;
			y = 0;
		} else if (elem.classList.contains("gs_reveal_fromRight")) {
			x = 100;
			y = 0;
		} else if (elem.classList.contains("gs_reveal_fromTop")) {
			x = 0;
			y = -100;
		}
		gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
			duration: 1.25,
			x: 0,
			y: 0,
			autoAlpha: 1,
			ease: "expo",
			overwrite: "auto"
		});
	}

	function hide(elem) {
		gsap.set(elem, { autoAlpha: 0 });
	}

	document.addEventListener("DOMContentLoaded", function () {
		gsap.registerPlugin(ScrollTrigger);

		gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
			hide(elem); // assure that the element is hidden when scrolled into view

			ScrollTrigger.create({
				trigger: elem,
				onEnter: function () { animateFrom(elem) },
				onEnterBack: function () { animateFrom(elem, -1) },
				onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
			});
		});
	});


	gsap.registerPlugin(ScrollTrigger);

	const AnimLogo = gsap.timeline({
		scrollTrigger: {
			trigger: ".questions",
			toggleActions: "restart none restart none",
			start: "top 60%",
			endTrigger: ".qwerty",
			end: "top 20px",
			onEnter: () => $("#questionsLogo path").addClass('anim-path'),
			onLeave: () => $(this).removeClass('anim-path'),
			onEnterBack: () => $(this).addClass('anim-path'),
			onLeaveBack: () => $(this).removeClass('anim-path'),

		}
	})

	gsap.to(".questions .advantages-title", {
		scrollTrigger: {
			trigger: ".questions",
			// onEnter onLeave onEnterBack onLeaveBakc
			start: "top 60%",
			endTrigger: ".three",
			end: "top 20px",
		},
		duration: 6,
		opacity: 1

	})
}