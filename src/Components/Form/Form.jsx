import './Form.css'
import logo from '../../assets/pic3.jpg'



function Form() {
    return (<>
    

<img  src={logo} alt="" className='logo rounded-5 text-center' />

<form className='w-75 m-auto'>
  
  <div className="">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

    <div className=" ">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>

    <div className="form-group ">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Cairo</option>
        <option>Giza</option>
        <option>Fayoum</option>
        <option>Alexandria</option>  
      </select>
    </div>
    
    <div className="form-group">
      <label htmlFor="inputNumper">Numper</label>
      <input type="number" className="form-control" id="inputNumper"/>
    </div>
    <h2>Choose Orders</h2>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" htmlFor="inlineCheckbox1">Focaccia</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" disabled/>
  <label class="form-check-label" htmlFor="inlineCheckbox2">Pizza salamino</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" htmlFor="inlineCheckbox1">Pizza spinaci</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" htmlFor="inlineCheckbox2">Pizza margherita</label>
</div>


  <div class="form-group">
    <label htmlFor="exampleFormControlTextarea1">Any additions?</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="cont mt-5 mb-5">
             
                <button className=' order m-auto'>Order</button>
            </div>
</form>
    
    </>  );
}

export default Form;