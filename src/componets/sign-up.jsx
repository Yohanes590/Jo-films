import '../componet-style/sign-up.css'
function SignUp(){
    return(<>

        <div className="sign-up-box">

                
                <div className="box">
                
                <div className="header-part">
                    <h1>Sign Up <span id='yellow-color'>Here</span></h1>
                    <p>Create <span id="yellow-color">Account For</span>  More Access</p>
                </div>

                <div className="input-sec">
                <input type="text" id="name"  placeholder='Your Name'/>

                    <input type="email" placeholder='Email' /><br/>

                    <input type="password" placeholder='password'/><br/>
                    <input type="password" placeholder='confirm'/><br/>
                    <button>Sign Up</button><br/><br/>

                    <p>I Have Already Account I Need <a href="/sign-in">Sign In</a></p>
                </div>
                

                </div>

        </div>
    
    </>)
}

export default SignUp