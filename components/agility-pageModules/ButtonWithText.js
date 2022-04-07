

const ButtonWithText = ({module})=>{
    const {fields} = module
console.log(fields)

    return(
      <div className={""}>
          <div className={"max-w-screen-xl mx-auto flex flex-col content-center space-y-5 mt-[11%]"}>
              <h3 className={"max-w-[900px] self-center text-center md:px-[20px]"}>{fields.title}</h3>
              <p className={"b1 w-[350px] text-center self-center md:px-[20px]"}>{fields.text}</p>
              <a href={fields.button.href} className="bttn1 text-white w-[180px] h-[56px] rounded-full bg-primary-blue text-center py-3 self-center ">{fields.button.text}</a>

          </div>
      </div>
    );
}

export default ButtonWithText