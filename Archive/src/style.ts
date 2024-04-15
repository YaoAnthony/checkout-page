
/**
 * Below is a style object used to define generl styles.
 */
const buttonstyles = {
    // button design
    button1 : "w-full h-full cursor-pointer px-5 box-border text-center tracking-wider rounded-2xl ease-in-out duration-300 text-white-light bg-blue-light hover:text-blue-deep hover:bg-white-light hover:shadow-card",
    icon : "w-7 h-7 border flex justify-center items-center rounded-md ",
}

const pageSetting = {
    "padding" : "px-5 sm:px-16 md:px-24 3xl:px-32 4xl:px-104",
    "reducePadding": "-translate-x-5 sm:-translate-x-16 md:-translate-x-24 lg:-translate-x-32 xl:-translate-x-64 2xl:-translate-x-80"
}

const inputSetting = {
    "input" : "w-full h-3 bg-white py-6 px-4 rounded-[15px] border-none shadow-input transition-all duration-250 text-base focus:outline-none focus:border focus:border-primary",
}

/**
 * Below is a style object used to define styles for the carousel component.
 */
const carouselStyles = {
    "slide" : "w-full sm:h-96 h-48 flex justify-center items-center bg-yellow-light",
}


export { 
    buttonstyles,
    pageSetting,
    inputSetting,
    carouselStyles,

}