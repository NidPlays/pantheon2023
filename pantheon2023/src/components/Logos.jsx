import React from 'react'

const Logos = ({backgroundColor}) => {
    return (
        <div>
            <div className={`${backgroundColor ? backgroundColor : 'bg-[#151515]'}`}>
                <div className="text-center py-12 heading-text text-4xl md:text-6xl xl:text-7xl">
                    Sponsors
                </div>
                <div className='flex overflow-hidden space-x-16 shrink-0'>
                    <div className='flex shrink-0 animate-marquee space-x-16'>
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />

                    </div>
                    <div className='flex shrink-0 animate-marquee space-x-16' aria-hidden="true">
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="max-w-none shrink-0"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logos
