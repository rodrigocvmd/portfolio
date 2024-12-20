import React, { useEffect, useRef, useState } from "react";
import EducationCard from "../components/general/EducationCard";
import CourseCard from "../components/general/CourseCard";
import education from "../db/education";
import courses from "../db/courses";
import { FaCode } from "react-icons/fa6";

function Education() {
	const [isFormacaoAcademicaOpen, setIsFormacaoAcademicaOpen] = useState(false);
	const [isFormacaoTecnicaOpen, setIsFormacaoTecnicaOpen] = useState(true);

	const formacaoAcademicaRef = useRef(null);
	const formacaoTecnicaRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			const isClickOnScrollbar = event.clientX >= document.documentElement.clientWidth;

			const isClickOnThemeToggleButton = event.target.closest(".theme-toggle-button");
			const isClickInsideDropdown = event.target.closest(".dropdown");

			if (isClickOnScrollbar || isClickOnThemeToggleButton || isClickInsideDropdown) {
				return;
			}

			if (formacaoAcademicaRef.current && !formacaoAcademicaRef.current.contains(event.target)) {
				setIsFormacaoAcademicaOpen(false);
			}
			if (formacaoTecnicaRef.current && !formacaoTecnicaRef.current.contains(event.target)) {
				setIsFormacaoTecnicaOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<div className="flex flex-col w-full justify-evenly items-center mx-3 2xs:mx-6 sm:mx-7 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-14 3xl:mx-24 mb-1 mt-4 2xs:mb-2 2xs:mt-5 sm:mb-3 sm:mt-6 lg:mb-4 lg:mt-7 xl:mb-5 xl:mt-8 2xl:mb-6 2xl:mt-9 3xl:mb-10 3xl:mt-13 gap-1 5xs:gap-2 3xs:gap-3 2xs:gap-4 xs:gap-4 sm:gap-5 lg:gap-6 xl:gap-7 2xl:gap-10 3xl:gap-14">
				<div
					ref={formacaoAcademicaRef}
					className={`collapse collapse-plus xl:py-4 3xl:py-8 bg-accent shadow-2xl ${
						isFormacaoAcademicaOpen ? "collapse-open" : ""
					}`}>
					<div
						className={`botaoCollapse collapse-title !text-base-100 flex justify-center text-xl 4xs:text-2xl 2xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl pl-12 ${
							isFormacaoAcademicaOpen
								? "xs:mt-2 sm:mt-4 md:mt-1 lg:mt-3 xl:mt-0 2xl:mt-3 2xs:mb-2 xs:mb-3 sm:mb-4 md:mb-1 2xl:mb-2"
								: ""
						}`}
						onClick={() => setIsFormacaoAcademicaOpen(!isFormacaoAcademicaOpen)}>
						Formação Acadêmica
					</div>
					<div
						className={`collapse-content ${
							isFormacaoAcademicaOpen ? "collapse-open 2xl:mt-7 3xl:mt-10 px-3" : ""
						}`}>
						<div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 2xl:m-0 2xl:place-content-between 3xl:grid-cols-3 gap-4 3xs:gap-5 lg:gap-4 xl:gap-4 sm:mx-1 md:mx-0 lg:mx-5 lg:my-3 xl:mx-8 xl:my-4 2xl:mx-4 3xl:mx-10 3xl:pb-10">
							{education.map((acadCourse, index) => (
								<EducationCard
									key={index}
									index={index}
									institution={acadCourse.institution}
									title={acadCourse.title}
									date={acadCourse.date}
									pic={acadCourse.pic}
									certificate={acadCourse.certificate}
									content={acadCourse.institution}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<div className="divider divider-accent w-10/12 2xs:w-9/12 sm:w-8/12 xl:w-9/12 3xl:w-8/12 self-center text-base-100">
						<FaCode className="text-6xl 3xs:text-7xl 2xs:text-8xl md:text-7xl lg:text-8xl 2xl:text-9xl" />
					</div>
				</div>

				<div
					ref={formacaoTecnicaRef}
					className={`collapse collapse-plus xl:py-4 3xl:py-8 bg-accent !shadow-2xl ${
						isFormacaoTecnicaOpen ? "collapse-open" : ""
					}`}>
					<div
						className={`botaoCollapse collapse-title !text-base-100 flex justify-center text-xl 4xs:text-2xl 2xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl pl-12 ${
							isFormacaoTecnicaOpen
								? "xs:mt-2 sm:mt-4 md:mt-1 lg:mt-3 xl:mt-0 2xl:mt-3 2xs:mb-2 xs:mb-3 sm:mb-4 md:mb-1 lg:mb-4 2xl:mb-2"
								: ""
						}`}
						onClick={() => setIsFormacaoTecnicaOpen(!isFormacaoTecnicaOpen)}>
						Formação Técnica
					</div>
					<div
						className={`collapse-content  ${
							isFormacaoTecnicaOpen
								? "collapse-open 2xl:mt-7 3xl:mt-10 sm:mx-1 lg:mx-2 xl:mx-3 3xl:mx-5"
								: ""
						}`}>
						<div className="w-full grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 3xl:gap-10">
							{courses.map((course) => (
								<CourseCard
									key={course.id}
									title={course.title}
									subtitle={course.subtitle}
									description={course.description}
									learned={course.learned}
									pic={course.pic}
									inProgress={course.inProgress}
									certificate={course.certificate}
									certificate2={course.certificate2}
									uniqueCertificate={course.uniqueCertificate}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Education;
