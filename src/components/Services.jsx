import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="py-16">
            <div className="container mx-auto md:px-6">
                <h2 className="text-4xl font-bold text-center uppercase text-black mb-4 relative">
                    Our <span className="text-orange-400">Services</span>
                </h2>
                <p className="text-lg text-center text-black my-12">
                    Specialized Outsourcing for the Security Industry
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {/* Card 1: Dispatch Services */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black group-hover:text-orange-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.64.08-1.26.22-1.86l5.62 5.62c.17.17.42.27.68.28.28-.01.53-.11.71-.29l5.62-5.62c.14.6.22 1.22.22 1.86 0 4.08-3.05 7.44-7 7.93zM12 4.07c3.95.49 7 3.85 7 7.93 0 .64-.08 1.26-.22 1.86L13.16 8.84c-.18-.18-.43-.28-.7-.28-.28 0-.53.1-.71.29L5.22 13.86c-.14-.6-.22-1.22-.22-1.86 0-4.08 3.05-7.44 7-7.93z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Dispatch Services</h3>
                        <p className="text-white group-hover:text-black text-sm">
                        24/7 dispatching support with trained personnel who understand security protocols, urgency, and clear communication.
                        </p>
                    </motion.div>

                    {/* Card 2: Scheduling */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                width="800px" height="800px" className="h-8 w-8 text-black group-hover:text-orange-400" viewBox="0 0 256 173" enable-background="new 0 0 256 173" xml:space="preserve">
                            <path d="M128.253,56.864c15.186,0,27.432-12.247,27.432-27.432S143.536,2,128.253,2
                                c-15.186,0-27.432,12.247-27.432,27.432C100.918,44.716,113.165,56.864,128.253,56.864z M64.571,136.32h-49.28
                                c-15.969,0-16.851-24.395,0.294-24.395H58.3l24.493-36.054c7.25-9.895,15.48-14.598,27.138-14.598h36.544
                                c11.659,0,19.888,4.311,27.138,14.598l24.591,36.054h43.01c17.243,0,16.165,24.395,0.588,24.395h-49.28
                                c-3.919,0-8.622-1.372-11.365-5.584l-18.811-26.844l-0.098,67.209H94.844l-0.098-67.209l-18.811,26.844
                                C73.192,134.85,68.49,136.32,64.571,136.32z"/>
                            <path d="M32.5,37.025C15.676,37.025,2,50.676,2,67.475c0,16.824,13.676,30.5,30.5,30.5S63,84.3,63,67.475
                                C62.951,50.676,49.275,37.025,32.5,37.025z M32.5,91.949c-13.504,0-24.474-10.97-24.474-24.474S18.996,43.002,32.5,43.002
                                s24.474,10.97,24.474,24.474C56.826,80.979,45.856,91.949,32.5,91.949z M47.701,61.523c-0.566-0.935-1.746-1.574-3.099-0.885
                                l-10.798,4.821V52.693c0-0.689-0.246-1.304-0.689-1.771l-0.025-0.025c-0.443-0.394-0.959-0.566-1.574-0.566
                                c-1.181,0-2.41,0.885-2.41,2.361v16.701c0,0.91,0.517,1.771,1.328,2.214c0.418,0.197,0.787,0.295,1.131,0.295
                                c0.369,0,0.787-0.123,1.181-0.295l13.946-6.666c0.615-0.32,1.058-0.836,1.254-1.451C48.094,62.851,48.021,62.138,47.701,61.523
                                L47.701,61.523z"/>
                            <path d="M241.697,39.734c-1.293,0-2.346,1.053-2.346,2.346v7.372c0,1.293,1.053,2.346,2.346,2.346c1.293,0,2.346-1.053,2.346-2.346
                                V42.08C244.043,40.787,242.989,39.734,241.697,39.734 M254,46.532v12.399v36.335h-54V58.883V46.532h7.325V49.5
                                c0,2.729,2.202,4.979,4.979,4.979c2.729,0,4.979-2.25,4.979-4.979v-2.968h19.436V49.5c0,2.729,2.25,4.979,4.979,4.979
                                c2.729,0,4.979-2.25,4.979-4.979v-2.968H254z M251.08,58.931h-48.16V92.25h37.436l10.723-10.58L251.08,58.931L251.08,58.931z
                                M212.303,39.734c-1.292,0-2.346,1.053-2.346,2.346v7.372c0,1.293,1.053,2.346,2.346,2.346s2.346-1.053,2.346-2.346V42.08
                                C214.649,40.787,213.596,39.734,212.303,39.734 M241.697,39.734c-1.293,0-2.346,1.053-2.346,2.346v7.372
                                c0,1.293,1.053,2.346,2.346,2.346c1.293,0,2.346-1.053,2.346-2.346V42.08C244.043,40.787,242.989,39.734,241.697,39.734
                                M224.333,87.66l-11.531-11.531l4.602-4.602l6.936,6.936l12.927-12.89l4.595,4.608L224.333,87.66z"/>
                            <g id="shopping_cart">
                            </g>
                            <g id="cross">
                            </g>
                            <g id="leaf">
                            </g>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Scheduling</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Efficient workforce scheduling, shift coverage, and conflict resolution to keep your operations running smoothly.
                        </p>
                    </motion.div>

                    {/* Card 3: Virtual Assistants */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                        <svg fill="currentColor" height="800px" width="800px" className="h-8 w-8 text-black group-hover:text-orange-400" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 512 512"  xml:space="preserve">
                            <g>
                                <path class="st0" d="M123.671,288.694c1.743,0.582,3.542,0.877,5.347,0.877h0.002c3.898,0,7.694-1.405,10.685-3.944
                                    c6.502-5.52,9.577-14.868,4.827-44.394c-4.204-26.18-10.716-39.891-21.77-45.838c-2.42-1.304-4.983-2.174-7.638-2.593
                                    c0.084-48.796,16.805-93.889,45.986-123.881c24.926-25.629,57.736-39.169,94.888-39.169c37.152,0,69.965,13.54,94.891,39.169
                                    c29.181,29.992,45.902,75.077,45.986,123.881c-2.655,0.419-5.218,1.289-7.638,2.593c-11.054,5.947-17.564,19.658-21.77,45.838
                                    c-1.797,11.18-2.535,19.829-2.25,26.39c-8.6,4.604-23.986,10.31-49.569,12.523c-4.031-6.716-11.219-10.846-18.998-10.846h-14.759
                                    c-12.273,0-22.257,9.984-22.257,22.259c0,12.275,9.984,22.259,22.257,22.259h14.759c8.682,0,16.485-4.992,20.144-12.803
                                    c23.268-1.933,42.473-6.716,57.11-14.239c2.735,1.832,5.854,2.795,9.076,2.795c1.819,0,3.62-0.295,5.351-0.877
                                    c11.772-3.921,36.599-30.753,38.2-88.688c1.642-59.324-18.154-114.658-54.314-151.831C341.563,16.661,301.375,0,255.999,0
                                    c-45.374,0-85.562,16.661-116.218,48.175c-36.158,37.174-55.955,92.507-54.313,151.831
                                    C87.07,257.941,111.897,284.773,123.671,288.694z"/>
                                <path class="st0" d="M452.727,457.031c-3.758-20.644-17.384-38.198-36.512-46.995l-80.048-32.71
                                    c-12.762-5.862-21.009-18.726-21.009-32.772v-6.452l-2.11,0.73c-5.375,1.864-10.891,2.803-16.398,2.803h-14.759
                                    c-27.612,0-50.077-22.461-50.077-50.077c0-27.608,22.465-50.07,50.077-50.07h14.759c10.305,0,20.204,3.129,28.628,9.053
                                    l0.532,0.373l0.64-0.109c17.624-2.904,25.745-7.516,28.82-9.759l5.264-7.694c5.153-16.561,7.766-32.112,7.766-46.219
                                    c0-74.697-47.23-128.912-112.302-128.912c-65.071,0-112.299,54.216-112.299,128.912c0,61.808,50.2,129.51,50.475,129.751
                                    c1.768,5.132,2.665,10.481,2.665,15.885v11.786c0,14.045-8.248,26.902-20.947,32.741l-80.17,32.771
                                    c-19.076,8.766-32.704,26.328-36.471,47.127L55.003,512h401.995L452.727,457.031z"/>
                            </g>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Virtual Assistants</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Administrative support tailored for security firms — from report handling to call management.
                        </p>
                    </motion.div>

                    {/* Card 4: Back-Office Support */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                        <svg fill="currentColor" width="800px" height="800px" className="h-8 w-8 text-black group-hover:text-orange-400" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Layer_3" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                            <g>

                            <path d="M27.126,15.264C28.241,14.613,29,13.417,29,12.036v-1.571c0-1.477-1.202-2.679-2.679-2.679h-2.643   C22.202,7.786,21,8.987,21,10.464v1.571c0,1.379,0.757,2.573,1.868,3.225c-0.912,0.416-1.674,1.087-2.184,1.945   c-0.506-0.341-1.053-0.632-1.639-0.857C19.632,15.652,20,14.765,20,13.786v-0.888c0-1.716-1.396-3.112-3.112-3.112h-1.775   c-1.716,0-3.112,1.396-3.112,3.112v0.888c0,0.98,0.368,1.866,0.954,2.562c-0.586,0.225-1.133,0.516-1.639,0.857   c-0.51-0.857-1.272-1.528-2.184-1.945C10.243,14.609,11,13.415,11,12.036v-1.571c0-1.477-1.202-2.679-2.679-2.679H5.679   C4.202,7.786,3,8.987,3,10.464v1.571c0,1.382,0.759,2.578,1.874,3.228C3.182,16.043,2,17.706,2,19.643c0,0.552,0.448,1,1,1   s1-0.448,1-1c0-1.576,1.346-2.857,3-2.857c1.222,0,2.32,0.723,2.775,1.773C8.667,19.834,8,21.452,8,23.214c0,0.552,0.448,1,1,1   s1-0.448,1-1c0-2.993,2.691-5.429,6-5.429s6,2.436,6,5.429c0,0.552,0.448,1,1,1s1-0.448,1-1c0-1.762-0.667-3.38-1.775-4.655   c0.455-1.05,1.553-1.773,2.775-1.773c1.654,0,3,1.282,3,2.857c0,0.552,0.448,1,1,1s1-0.448,1-1   C30,17.706,28.818,16.043,27.126,15.264z M5,10.464c0-0.374,0.305-0.679,0.679-0.679h2.643C8.695,9.786,9,10.09,9,10.464v1.571   c0,0.965-0.785,1.75-1.75,1.75h-0.5C5.785,13.786,5,13,5,12.036V10.464z M14,13.786v-0.888c0-0.613,0.499-1.112,1.112-1.112h1.775   c0.613,0,1.112,0.499,1.112,1.112v0.888c0,1.103-0.897,2-2,2S14,14.889,14,13.786z M23,10.464c0-0.374,0.305-0.679,0.679-0.679   h2.643c0.374,0,0.679,0.305,0.679,0.679v1.571c0,0.965-0.785,1.75-1.75,1.75h-0.5c-0.965,0-1.75-0.785-1.75-1.75V10.464z"/>

                            </g>

                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Back-Office Support</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Data entry, invoicing, reporting, and admin tasks — handled with accuracy and confidentiality.
                        </p>
                    </motion.div>

                    {/* Card 5: Monitoring */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                        <svg fill="currentColor" height="800px" width="800px" className="h-8 w-8 text-black group-hover:text-orange-400" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 32 32" xml:space="preserve">
                            <path d="M23,28L23,28c-1.1,0-2.1-0.7-2.5-1.8c0-0.1,0-0.2-0.1-0.2h-8.9c0,0.1,0,0.2-0.1,0.2C11.1,27.3,10.1,28,9,28h0
                                c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S23.6,28,23,28z"/>
                            <g>
                                <path d="M11,13v-2c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3h-2C11.4,14,11,13.6,11,13z"/>
                                <path d="M27,3H5C3.3,3,2,4.3,2,6v15c0,1.7,1.3,3,3,3h6.9h8.1H27c1.7,0,3-1.3,3-3V6C30,4.3,28.7,3,27,3z M16,14c0,2.8-2.2,5-5,5
                                    s-5-2.2-5-5s2.2-5,5-5c0-0.6,0.4-1,1-1c2.8,0,5,2.2,5,5C17,13.6,16.6,14,16,14z M25,16h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2
                                    c0.6,0,1,0.4,1,1S25.6,16,25,16z M25,13h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S25.6,13,25,13z"/>
                            </g>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Monitoring</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Surveillance assistance and alert management, integrated with your systems for proactive security.
                        </p>
                    </motion.div>

                    {/* Card 6: Quality Workforce */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                        <svg fill="currentColor" width="800px" height="800px" className="h-8 w-8 text-black group-hover:text-orange-400" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                            <g id="_x37_20_x2C__development_x2C__human_x2C__network_x2C__personality_x2C__self">

                            <g>

                            <path d="M293.234,452.478v-93.249H186.927v93.249h50.293V397.97    c0-1.572,1.288-2.839,2.86-2.839s2.862,1.267,2.862,2.839v54.508H293.234z M167.295,472.371c-1.572,0-2.862-1.288-2.862-2.86    s1.29-2.86,2.862-2.86H329.29c1.572,0,2.86,1.288,2.86,2.86s-1.288,2.86-2.86,2.86H167.295z M129.318,485.584    c-1.572,0-2.862-1.267-2.862-2.839s1.29-2.862,2.862-2.862h63.09c1.572,0,2.86,1.29,2.86,2.862s-1.288,2.839-2.86,2.839H129.318z     M237.985,124.797V65.069c0-0.37,0.065-0.698,0.197-1.004l-17.711-17.689l20.375-20.374l10.176,10.176l10.199,10.198    l-17.711,17.689c0.132,0.306,0.175,0.634,0.175,1.004v59.728c3.362,0.24,6.574,0.916,9.63,1.943    c-0.044,6.355-3.778,12.164-9.739,16.422l-0.132,0.109c-6.289,4.455-15.024,7.207-24.7,7.207c-2.969,0-5.852-0.262-8.56-0.742    c-1.834-0.328-3.582-0.742-5.286-1.268c1.135-2.664,2.578-5.197,4.238-7.512l-49.201-28.652l-24.175,6.486l-7.447-27.843    l13.912-3.713l13.91-3.734l6.355,23.716l50.358,29.308l0.393-0.394C219.685,129.711,228.353,125.496,237.985,124.797z     M268.884,136.59l50.163-28.805l6.509-24.284l27.821,7.447l-3.735,13.933l-3.712,13.91l-23.606-6.333l-49.747,28.563    c2.183,3.036,3.931,6.377,5.175,9.981l-0.918,0.087c-1.353,0.109-2.772,0.174-4.213,0.174c-5.045,0-9.828-0.742-14.13-2.096    c-3.146-0.961-6.027-2.248-8.561-3.8c5.001-4.499,8.254-10.09,8.954-16.247c3.537,1.834,6.77,4.215,9.565,7.01L268.884,136.59z     M278.407,174.392l43.479,25.112l24.043-6.441l7.447,27.844l-13.911,3.734l-13.91,3.711l-6.399-23.847l-42.737-24.698    c-1.944,4.324-4.673,8.211-7.97,11.531c-7.077,7.054-16.839,11.422-27.604,11.422c-10.788,0-20.55-4.368-27.604-11.422    c-3.297-3.298-6.028-7.207-7.97-11.51l-42.825,24.984l-6.312,23.539l-27.822-7.445l3.713-13.911l3.734-13.933l24.328,6.529    l43.195-25.2c-0.959-3.385-1.484-6.966-1.484-10.658c0-3.405,0.458-6.726,1.267-9.87c1.986,0.612,4.04,1.113,6.136,1.484    c3.08,0.547,6.268,0.83,9.542,0.83c10.069,0,19.283-2.708,26.337-7.163c3.408,2.337,7.359,4.237,11.706,5.591    c4.869,1.528,10.22,2.358,15.833,2.358c1.549,0,3.101-0.065,4.673-0.196l1.921-0.197c0.438,2.316,0.655,4.717,0.655,7.163    C279.869,167.426,279.367,171.007,278.407,174.392z M249.559,485.999c-1.574,0-2.862-1.268-2.862-2.84s1.288-2.86,2.862-2.86    h133.146c1.572,0,2.838,1.288,2.838,2.86s-1.266,2.84-2.838,2.84H249.559z M224.117,333h25.856    c-2.839-27.537-6.529-52.716-6.552-80.188h-11.093v16.619L224.117,333z M234.949,246.676l-20.943-20.157l-1.005,20.571h22.515    L234.949,246.676z M262.246,227.742l-21.14,18.91c-0.196,0.176-0.393,0.328-0.61,0.438h22.318L262.246,227.742z M321.734,353.529    V244.906l-53.919-21.184l0.764,26.141c0.044,1.572-1.2,2.883-2.772,2.928l-16.685,0.021v16.553l6.856,66.498    c0,1.572-1.265,2.839-2.86,2.839l-32.582-0.022c-1.572-0.196-2.664-1.616-2.467-3.188l8.56-66.17v-16.509h-16.619    c-1.572,0-2.86-1.288-2.86-2.86l1.223-24.677l-49.965,19.632v108.623h22.581v-76.651h5.939v76.651h105.369v-76.651h5.939v76.651    H321.734z"/>

                            </g>

                            </g>

                            <g id="Layer_1"/>

                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Quality Workforce</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Trained and vetted personnel who understand the nuances of the security industry, ensuring high-quality service.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services
