function Contact() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className=' w-1/2'>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
            <div className='flex flex-col text-start w-1/2 p-16'>
            <h1 className="text-4xl font-sofia">Contact Me</h1>
            <p>Feel free to reach out to me with any questions or comments you may have!
                I will do my best to respond to you as soon as possible.
            </p>
            </div>
            
        </div>
    );
};

export default Contact;