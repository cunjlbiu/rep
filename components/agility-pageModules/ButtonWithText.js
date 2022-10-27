

const ButtonWithText = ({module})=>{
    const {fields} = module
    //console.log(fields)

    return(
      <div className={"md:bg-[#F0F9FF]"}>
          <div className={"max-w-screen-xl mx-auto flex flex-col content-center space-y-5 mt-[11%] md:pb-[165px] md:bg-[#F0F9FF]"}>
              <h3 className={"max-w-[900px] self-center text-center md:px-[20px] md:mt-[150px] md:text-[30px] md:leading-[2rem] md:text-primary-darkblue"}>{fields.title}</h3>
              <p className={"b1 w-[350px] text-center self-center md:px-[20px] md:mt-[1px] md:text-[16px]"}>{fields.text}</p>
              <a href={fields.button.href} className="bttn1 text-white w-[180px] h-[56px] rounded-full bg-primary-blue text-center py-3 md:py-3 self-center md:w-[156px] md:h-[56px] md:text-[14px] ">{fields.button.text}</a>
          </div>
      </div>
    );
}

export default ButtonWithText