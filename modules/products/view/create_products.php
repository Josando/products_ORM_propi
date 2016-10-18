<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css">
<script type="text/javascript" src="modules/products/view/js/products.js" ></script>


<!--Main -->

<div id="main">


 <h1>Product Information</h1>

    </br>
    	<form name="formproducts" id="form_products" >


    	<table width="50%"  border="0" cellspacing="0" cellpadding="0">

    	   	<tr>


		<td><label for="name"><b>Product name:</b></label></td>
		<td><input name="name" id="name" type="text" placeholder="name" value="" /></td>

		<td><div id="e_name"></div></td>

         </tr>

    	    <tr>

			<td><label for="code"><b>Product code:</b></label></td>
		<td><input  name="code" id="code" type="text" placeholder="code" value="" /></td>

			<td><div id="e_code"></div></td>

            </tr>




		<tr>


          	<td>  <label for="origin"><b>Origin:</b></label></td>
           	<td> <input name="origin" id="origin" type="text" placeholder="origin" value=""/></td>

          	<td> <div id="e_origin" ></div</td>


 </tr>


        	<tr>


           <td> <label for="provider"><b>Provider:</b></label></td>
            <td><input name="provider" id="provider" type="text" placeholder="Provider" value=""/></td>
		    <td>

		<div id="e_provider" ></div>
		     </td>

             </tr>


        	<tr>


            <td><label for="email"><b>Email:</b></label></td>
          <td><input id="email" name="email" type="text" placeholder="email" value=""/></td>

          	<td> <div id="e_email" ></div></td>



         </tr>

         <!------------------------------------------------------------------------------------------------------------------------------>

        	<tr>


            <td><label for="price"><b>Price:</b></label></td>
          <td><input id="price" name="price" type="text" placeholder="price" value="" /></td>
		<td><div id="e_price" ></div></td>

		    </tr>


        	<tr>


            <td valign="top"><label for="description"><b>Description:</b></label></td>
            <td><textarea  id="description" name="description" placeholder="description" rows="3" cols="30" value=""></textarea></td>
		<td><div id="e_description" ></div></td>


         </tr>





         	<tr >
			  <td><label for="material"><b>Material:</b></label></td>
			  <td id="material">Carbon<input type="checkbox" name="material[]" value="Carbon" class="messageCheckbox">
					Fiberglass  <input type="checkbox" name="material[]" value="Fiberglass" class="messageCheckbox">
					Graphite <input type="checkbox" name="material[]" value="Graphite" class="messageCheckbox">
					Grafeno   <input type="checkbox" name="material[]" value="Grafeno" class="messageCheckbox"></td>

				<td><div id="e_material" ></div></td>


			</tr>


         <tr>
             <td><label><b>Stock:</b></label></td>
             <td><input id='stock_yes' name="stock" class="element radio" type="radio" value="Yes" checked/>
             <label>yes</label>
              <input id='stock_no'name="stock" class="element radio" type="radio" value="No"/>
              <label>No</label></td>


         </tr>

         <tr>
            <td><label><b>Product date reception:</b></label></td>
             <td> <input id="date_reception" type="text" name="date_reception" placeholder="dd/mm/yyyy" value=""></td>

              <td> <div id="e_date_reception" ></div></td>


            </tr>

          <tr>

            <td><label><b>Product departure date:</b></label></td>
             <td> <input id="departure_date" type="text" name="departure_date" placeholder="dd/mm/yyyy" value=""></td>

              <td> <div id="e_departure_date" ></div></td>

             </tr>



        </table>


        <p>

          <label><b>Shovel type:</b></label>

        <select name="type" id="type">

           <option value="Select type" selected>Select type</option>
           <option value="Control">Control</option>
           <option value="Power">Power</option>
           <option value="Balance">Balance</option>

        </select>

        <span id="e_type" ></span>

         </p>

     <p>

          <label><b>Shape shovel:</b></label>

        <select name="shape" id="shape">

           <option value="Select Shape" selected>Select Shape</option>
           <option value="Round">Round</option>
           <option value="Tear">Tear</option>
           <option value="Diamond">Diamond</option>


        </select>

         <div id="e_shape" ></div>

        </p>

     <p><label><b>Shovel brand:</b></label>
        <select name="brand" id="brand">
            <option value="Select brand" selected>Select brand</option>
            <option value="Vivora">Vivora</option>
            <option value="Nox">Nox</option>
            <option value="Durus">Durus</option>
            <option value="Adidas">Adidas</option>
            <option value="Start_vite">Start_vite</option>
        </select>
         <div id="e_brand" ></div>
        </p>
        <br>
        <div  id="progress">
                        <div id="bar"></div>
                        <div id="percent">0%</div >
                    </div>

                    <div class="msg"></div>
                    <br/>
                    <div style="margin-right:1000px " id="dropzone" class="dropzone" ></div><br/>
                    <br/>
                    <br/>
                    <br/>


        <div id="buttons">

            <button type="button" id="submit_product" name="submit_product"  value="submit">Submit Message</button>

            <input id="borrar" type="reset" name="borrar" value="Delete" />

        </div>



	</form>

</div>

<!-- Main -->

<!-- Tweet -->
		<div id="tweet">
			<div class="container">
				<section>
					<blockquote>&ldquo;In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat.&rdquo;</blockquote>
				</section>
			</div>
		</div>
	<!-- /Tweet -->
