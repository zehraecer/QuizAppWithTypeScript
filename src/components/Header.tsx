import { useContext } from "react";
import { MyContext } from "../App";

export const Header = () => {
    const context = useContext(MyContext)
    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { data, headerIcon } = context

    console.log(headerIcon);
    const titleIcon = data.find(e => e.title === headerIcon)
    console.log(titleIcon);


    return (

        <div className="d-flex justify-content-between">
            {titleIcon ? (
                <div className={`d-flex justify-content-center align-items-center gap-2  ${titleIcon.title}`} >
                    <img src={titleIcon.icon} />
                    <span>{titleIcon.title}</span>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}