function validateForm(){
		let name = document.forms["placeOrderForm"]["namef"].value
		if (name == ""){
			alert("Name must be filled out")
					
		}
			
		let email = document.forms["placeOrderForm"]["email"].value
		if (email == ""){
			alert("Email address must be filled out")
					
		}
			
			
		let card = document.forms["placeOrderForm"]["card"].value
		if (card ==""){
			alert("Card Number must be filled out")
	
		}
			return false;
		}
			

let items=[];

function waterColors(){
	let item =	{
		"name": "Water Colors",
		"price":10,
		"quantity": 1
		
	}	
		updateQunatity(item);
		console.log(items)
}
function oilPaint(){
	let item =	{
		"name": "Oil Paint ",
		"price":20,
		"quantity": 1
		
	}
		updateQunatity(item);	
}

function acrylicPaint(){
	let item =	{
		"name": "Acrylic Paint",
		"price":15,
		"quantity": 1
		
	}	

		updateQunatity(item);
		
}



function waterColorBrush(){
	let item =	{
		"name": "Water Color Brush",
		"price":4,
		"quantity": 1
		
	}
		updateQunatity(item);
}


function oilPaintBrush(){
	let item =	{
		"name": "Oil Paint Brush",
		"price":5,
		"quantity": 1
		
	}	
		updateQunatity(item);
}


function acrylicPaintBrush(){
	let item =	{
		"name": "Acrylic Paint Brush ",
		"price":5,
		"quantity": 1
		
	}	
		updateQunatity(item);
}


function plasticPalette(){
	let item =	{
		"name": "Plastic Palette ",
		"price":2,
		"quantity": 1
		
	}	
		updateQunatity(item);
}


function ceremicPalette(){
	let item =	{
		"name": "Ceramic Palette",
		"price":10,
		"quantity": 1
		
	}	
		updateQunatity(item);
}

function woodenpalette(){
	let item =	{
		"name": "Wooden Palette",
		"price":5,
		"quantity": 1
		
	}	
		updateQunatity(item);
}


function updateQunatity(item){
    
    //console.log("updateQunatitys1");
     var matchingItem = null;
    for(var i =0; i < items.length; i++){
       var currenItem = items[i];
        console.log(currenItem.name);
       
        if (currenItem.name == item.name){
            matchingItem = currenItem;
            
            //console.log("updateQunatitys2");

        }
       //console.log("updateQunatitys3");
    }
    if (matchingItem == null){
        items.push(item);
    }else{
		matchingItem.quantity++;
    }
}

function printArray(){
    let totalprice = 0 ;
    let table= document.getElementById('productCart');
    for(let  i = 0; i < items.length; i++){
        let currentItem = items[i];
        let row = table.insertRow();
        let nameCell = row.insertCell();
        let priceCell =row.insertCell();
        let quantityCell = row.insertCell();
        let itemTotalCell = row.insertCell();
        let nametxt = document.createTextNode(currentItem.name);
        let pricetxt = document.createTextNode(currentItem.price);
        let quantitytxt = document.createTextNode(currentItem.quantity);
        let itemTotaltxt = document.createTextNode( currentItem.price * currentItem.quantity);
        nameCell.appendChild(nametxt);
        priceCell.appendChild(pricetxt);
        quantityCell.appendChild(quantitytxt);
        itemTotalCell.appendChild(itemTotaltxt);
        
         totalprice = totalprice + currentItem.price * currentItem.quantity;
    }
        let row = table.insertRow();
        let nameCell = row.insertCell();
        let cell = row.insertCell();
        let cell2 = row.insertCell();
        let priceCell =row.insertCell();
        let nametxt = document.createTextNode("Total Price");
        let pricetxt = document.createTextNode(totalprice);
        let celltxt = document.createTextNode("--")
        let celltxt2 = document.createTextNode("--")
        nameCell.appendChild(nametxt);
        cell.appendChild(celltxt);
        cell2.appendChild(celltxt2);
        priceCell.appendChild(pricetxt);
  
		printContent();
}

function printContent(){
	let name = document.forms["placeOrderForm"]["namef"].value 
	let email = document.forms["placeOrderForm"]["email"].value
	document.getElementById("customerName").innerHTML = "Name: " + name
	document.getElementById("customerEmail").innerHTML = "Email: "+ email	
}





	
	