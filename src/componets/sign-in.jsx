import '../componet-style/sign-up.css'
function SignIn(){
    return(<>

        <div className="sign-up-box">

                
                <div className="box">
                
                <div className="header-part"><br/><br/>
                    <h1>Sign In <span id='yellow-color'>Here</span></h1>
                    <p>Sign In Your <span id="yellow-color">Account For</span>  More Access</p>
                </div>

                <div className="input-sec">
                    <center>
                    <input type="email" placeholder='Email' />

                    <input type="password" placeholder='password'/><br/>
                    <button>Sign Up</button><br/><br/>

                    <p>I Have Don't Have Account I Need <a href="/sign-up">Sign up</a></p>
                    </center>
                </div>
                

                </div>

        </div>
    
    </>)
}

export default SignIn