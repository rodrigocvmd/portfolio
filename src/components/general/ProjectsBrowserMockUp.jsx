import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectsBrowserMockUp({ id, title, projectURL, repoURL, projectPic, description }) {
	const modalId = `modal-${id}`;
	const modalRef = useRef(null);

	// Função para abrir o modal e rolar para o topo
	const openModal = () => {
		const modal = modalRef.current;
		if (modal) {
			modal.showModal();

			requestAnimationFrame(() => {
				modal.scrollTop = 0;
				const modalBox = modal.querySelector(".modal-box");
				if (modalBox) {
					modalBox.scrollTop = 0;
				}
			});
		}
	};

	const closeModal = (event) => {
		const modal = modalRef.current;
		if (modal && !modal.querySelector(".modal-box").contains(event.target)) {
			modal.close();
		}
	};

	// Fechar o modal ao clicar fora dele
	useEffect(() => {
		const modal = modalRef.current;
		if (modal) {
			modal.addEventListener("click", closeModal);
		}
		return () => {
			if (modal) {
				modal.removeEventListener("click", closeModal);
			}
		};
	}, []);

	return (
		<>


<div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {(feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>


			{/* <button
				onClick={openModal}
				className="p-0 rounded-2xl !shadow-2xl border-0 outline-hidden h-fit !3xl:rounded-3xl">
				<div className="mockup-browser bg-accent border-0 h-full overflow-hidden !3xl:rounded-3xl">
					<div className="mockup-browser-toolbar gap-2 lg:gap-4 2xl:gap-6 3xl:gap-8 text-base-100">
						<div className="campo flex justify-start w-9/12 sm:w-10/12 md:w-full 3xl:ml-10 xl:py-1 3xl:py-3 pr-1">
							<div className="input !bg-neutral rounded-lg !flex !m-0 md:py-4 lg:py-5 xl:py-7 3xl:py-10 items-center text-xs w-11/12 3xs:!w-full 5xs:text-sm 4xs:text-base sm:text-lg lg:text-xl xl:text-2xl 3xl:text-4xl md:rounded-3xl 2xl:rounded-full">
								{projectURL}
							</div>
						</div>
					</div>
					<div className="bg-base-200 flex flex-col justify-center 2xs:!h-full">
						<img src={projectPic} alt="" className="opacity-90" />
					</div>
					<div className="text-lg 4xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl py-1 4xs:py-1 sm:py-2 lg:py-3 xl:py-4 2xl:py-5 3xl:py-8 !3xl:rounded-3xl !text-base-100">
						{title}
					</div>
				</div>
			</button>
			<dialog id={modalId} ref={modalRef} className="modal">
				<div className="modal-box max-w-full 3xl:w-4/6 flex flex-col items-center p-3 md:p-6 lg:p-8 2xl:p-9 3xl:p-14 2xl:rounded-3xl bg-accent !shadow-2xl h-3/4">
					<img
						src={projectPic}
						alt={`Imagem do Projeto ${title}`}
						className="rounded-md 3xs:rounded-lg xs:rounded-xl lg:rounded-2xl 2xl:rounded-3xl w-10/12 md:w-9/12"
					/>
					<h2 className="text-2xl xs:text-3xl lg:text-5xl 3xl:text-6xl mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 3xl:mt-16 !text-base-100">
						{title}
					</h2>
					<div className="divider divider-neutral place-self-center mb-0 6xs:mb-1 md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-6 mt-4 xs:mt-5 md:mt-6 lg:mt-8 2xl:mt-10 3xl:mt-12 w-7/12 3xs:w-6/12 md:w-5/12 lg:w-4/12"></div>
					<div className="mt-3">
						{Array.isArray(description) ? (
							description.map((paragraph, index) => (
								<p
									key={index}
									className="text-justify 5xs:text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl indent-8 5xs:indent-10 4xs:indent-11 3xs:indent-12 xs:indent-16 sm:indent-20 lg:indent-24 xl:indent-28 2xl:indent-32 3xl:indent-36 leading-relaxed 6xs:leading-relaxed 5xs:leading-relaxed 4xs:leading-relaxed 3xs:leading-relaxed 2xs:leading-relaxed xs:leading-relaxed sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal 2xl:leading-normal 3xl:leading-normal px-1 4xs:px-2 2xs:px-3 xs:px-4 md:px-6 lg:px-8 xl:px-10 !text-base-100">
									{paragraph}
									<br />
									<br />
								</p>
							))
						) : (
							<p className="text-justify 5xs:text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl indent-8 5xs:indent-10 4xs:indent-11 3xs:indent-12 xs:indent-16 sm:indent-20 lg:indent-24 xl:indent-28 2xl:indent-32 3xl:indent-36 leading-relaxed 6xs:leading-relaxed 5xs:leading-relaxed 4xs:leading-relaxed 3xs:leading-relaxed 2xs:leading-relaxed xs:leading-relaxed sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal 2xl:leading-normal 3xl:leading-normal px-1 4xs:px-2 2xs:px-3 xs:px-4 md:px-6 lg:px-8 xl:px-10 !text-base-100">
								{description}
							</p>
						)}
					</div>
					<div className="modal-action flex justify-center w-full mt-0 mb-1 6xs:mb-2 xs:mb-2 md:mb-0">
						<form method="dialog" className="w-full">
							<div className="flex flex-col items-center w-full gap-3 xs:gap-3 md:gap-4 lg:gap-5 xl:gap-6 3xl:gap-8">
								<div className="w-full flex justify-center">
									<Link
										to={projectURL}
										target="_blank"
										className="botao flex justify-center items-center rounded-lg 2xs:rounded-xl xl:rounded-2xl 2xl:rounded-2xl px-3 py-2 2xs:py-3 lg:py-5 2xl:py-6 3xl:py-8 text-base 6xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl !bg-secondary !shadow-2xl w-4/6 2xs:w-1/3 md:w-1/4 2xl:w-1/5 3xl:w-1/4">
										Visitar Projeto
									</Link>
								</div>
								<div className="w-full flex justify-center">
									<Link
										to={repoURL}
										target="_blank"
										className="botao flex justify-center items-center rounded-lg 2xs:rounded-xl xl:rounded-2xl 2xl:rounded-2xl px-3 py-2 2xs:py-3 lg:py-5 2xl:py-6 3xl:py-8 text-base 6xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl !bg-secondary !shadow-2xl w-4/6 2xs:w-1/3 md:w-1/4 2xl:w-1/5 3xl:w-1/4">
										Repositório GitHub
									</Link>
								</div>
								<button className="botao flex justify-center items-center rounded-lg 2xs:rounded-xl xl:rounded-2xl 2xl:rounded-2xl px-3 py-2 2xs:py-3 lg:py-5 2xl:py-6 3xl:py-8 text-base 6xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl !bg-secondary !shadow-2xl w-2/5 2xs:w-1/5 md:w-1/6 3xl:w-1/5">
									<div className="min-h-fit">Fechar</div>
								</button>
							</div>
						</form>
					</div>
				</div>
			</dialog> */}
		</>
	);
}

ProjectsBrowserMockUp.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	projectURL: PropTypes.string.isRequired,
	repoURL: PropTypes.string.isRequired,
	projectPic: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default ProjectsBrowserMockUp;
