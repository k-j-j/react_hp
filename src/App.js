import './reset.css';
import './App.css';
import $ from 'jquery'; 

function App() {

  $(function(){  			
    const timer = setInterval(function(){  
          
      const now = new Date();
      const hr = now.getHours();
      const min = now.getMinutes();
      const sec = now.getSeconds();	
      let hNum, mNum, sNum;
       if(hr >=10){	
        hNum = hr;			
      }else{
        hNum = "0"+hr;
      };
      
          if(min >=10){
           mNum = min;
      }else{
        mNum = "0"+min;
      };
      
      if(sec >=10){
        sNum = sec;
      }else{
        sNum = "0"+sec;
      };
  
          $("p span").eq(0).text(hNum);
      $("p span").eq(1).text(mNum);
      $("p span").eq(2).text(sNum);	
          
      },1000);
  
      const now = new Date();
      const hr = now.getHours();
  
      if(hr>=5 && hr<11){ 
          $("#wrap").removeClass();
          $("#wrap").addClass("morning");
          $("nav li").removeClass();
          $("nav li").eq(0).addClass("on");
      }else if(hr>=11 && hr<16){
      $("#wrap").removeClass();
      $("#wrap").addClass("afternoon");
      $("nav li").removeClass();
      $("nav li").eq(1).addClass("on");
    }else if(hr>=16 && hr<20){
      $("#wrap").removeClass();
      $("#wrap").addClass("evening");	
         $("nav li").removeClass();
      $("nav li").eq(2).addClass("on");
    }else if(hr>=20 && hr<25){ 
      $("#wrap").removeClass();
      $("#wrap").addClass("night");
      $("nav li").removeClass();
      $("nav li").eq(3).addClass("on");
    };
  
      $("nav li").on("click",function(){
      const className = $(this).children("a").text();
      $("nav li").removeClass();
      $(this).addClass("on");
      $("#wrap").removeClass();
      $("#wrap").addClass(className);		
    });
  
  
  });
  
  


  return (
    <div id="wrap" className="">
  
    <img src="./img/cloud1.png"/>
    <img src="./img/cloud2.png"/>
    
      <h1></h1>
    
    
      <ul id="gnb" class="cf">
        <li><a href="#">About</a></li>
        <li><a href="#">Company</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    
      <article>
        <p><strong>Lorem</strong> Ipsum</p>
        <em>Lorem Ipsum is simply dummy text of the printing Materials</em>
       </article>
       

    <figure>		
      <p>
    
        <span>00</span> : <span>00</span> : <span>00</span>		
    
        <img className="cl1" src="./img/cloud1.png" />
        <img className="cl2" src="./img/cloud2.png" />
      </p>		
    </figure>
    
   
    <nav>
      <ul>
        <li className="on"><a href="#">  morning</a></li>
        <li><a href="#">  afternoon</a></li>
        <li><a href="#">  evening</a></li>
        <li><a href="#">  night </a></li>
      </ul>
    </nav>
    
  </div>  
  
  );
}

export default App;
