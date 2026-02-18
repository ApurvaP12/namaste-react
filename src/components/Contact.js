const Contact = () => {
    return(
        <div className="contact-page-container text-center">
            <h1>⚒️Builing: Contact Us Page 🛠️ </h1>

            <div className="m-4">
                <form>
                    <input type="text" placeholder="Enter name" className="border-2 m-1 p-2"/>
                    <input type="text" placeholder="Enter Text" className="border-2 m-1 p-2"/>
                    <button className="p-2 border-2 bg-gray-400 rounded-lg cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;