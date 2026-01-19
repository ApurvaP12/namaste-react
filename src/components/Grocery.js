const Grocery = () => {
    return(
        <div className="grocery-page-container text-center">
            {/* Example of lazy load, we are creating seperate bundle for this component */}
            <h1>Grocery Component</h1>
            <p> We hav elot of child components in to this</p>
        </div>
    )
}

export default Grocery;