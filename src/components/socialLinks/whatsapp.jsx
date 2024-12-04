import React from "react";

const WhatsappLink = ({whatsapp}) => {
    return (
        <>
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                marginTop:'10px'

            }}>
                <a style={{textDecoration: 'none'}} target="_blank" href={whatsapp}> 
                <button
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "#25D366",
                        color: "white",
                        border: "none",
                        padding: "15px 30px",
                        cursor: "pointer",
                        boxShadow: "0 5px 15px rgba(37, 211, 102, 0.3)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                        e.target.style.boxShadow = "0 8px 20px rgba(37, 211, 102, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "0 5px 15px rgba(37, 211, 102, 0.3)";
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        width="24px"
                        height="24px"

                    >
                        <path d="M12 0C5.371 0 0 5.371 0 12c0 2.119.551 4.112 1.512 5.847L0 24l6.39-1.515A11.957 11.957 0 0 0 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm.004 22c-1.957 0-3.779-.521-5.359-1.428l-.384-.224-3.785.898.833-3.903-.247-.394C1.973 15.106 1.503 13.577 1.503 12c0-5.806 4.693-10.5 10.497-10.5 5.805 0 10.5 4.694 10.5 10.5 0 5.806-4.695 10.5-10.5 10.5zm5.487-7.064c-.325-.162-1.92-.949-2.217-1.058-.296-.111-.511-.162-.727.162s-.833 1.058-1.021 1.277c-.187.218-.374.243-.699.081-.325-.162-1.373-.506-2.614-1.616-.966-.86-1.619-1.922-1.808-2.243-.187-.324-.02-.499.143-.662.145-.145.324-.374.487-.561.162-.187.217-.324.325-.54.111-.218.055-.405-.026-.561-.081-.162-.727-1.754-.995-2.396-.262-.637-.529-.551-.727-.561-.198-.01-.424-.012-.65-.012s-.609.087-.924.405c-.324.325-1.265 1.235-1.265 3.008s1.296 3.487 1.48 3.735c.187.243 2.54 3.884 6.157 5.448 2.161.932 3.004 1.012 4.078.873 1.041-.136 1.92-.92 2.194-1.448.274-.529.274-.989.193-1.135-.081-.146-.293-.234-.61-.374z" />
                    </svg>
                    Join our WhatsApp Group
                </button>
                </a>
            </div>
        </>
    );
};

export default WhatsappLink;
