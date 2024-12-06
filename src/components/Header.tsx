import { useContext } from "react";
import { MyContext } from "../App";

export const Header = () => {
    const context = useContext(MyContext)
    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { data, headerIcon } = context
    const titleIcon = data.find(e => e.title === headerIcon)

    return (

        <div className="d-flex justify-content-between">
            {titleIcon ? (
                <div className={`d-flex justify-content-center align-items-center gap-3  ${titleIcon.title}`} >
                    <img src={titleIcon.icon} />
                    <span className="header-span">{titleIcon.title}</span>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}