import{ad as C,ae as u}from"./X6HiR9a0.js";const F=()=>{const{$swal:n}=C(),c=(t,o=5)=>n.fire({icon:"success",title:t,timer:o*1e3,showConfirmButton:!1}),l=(t,o={})=>n.fire({icon:"success",title:t,showConfirmButton:!0,confirmButtonText:"OK",confirmButtonColor:"#FBF6DA",...o}),i=(t,o=5)=>n.fire({icon:"error",title:t,timer:o*1e3,showConfirmButton:!1}),a=t=>n.fire({icon:"info",title:t,confirmButtonText:"OK",confirmButtonColor:"#FBF6DA"}),f=t=>{var o,s;i(((s=(o=t==null?void 0:t.value)==null?void 0:o.data)==null?void 0:s.message)||"發生錯誤")},w=t=>r("此為會員功能，請登入",[{text:"登入",value:"login"},{text:"註冊",value:"signup"}]).then(o=>{o==="login"?u({path:"/login",query:t?{redirect:t}:{}}):o==="signup"&&u("/signup")}),m=t=>(n.fire({title:t||"處理中...",allowOutsideClick:!1,didOpen:()=>{n.showLoading()},willClose:()=>{n.hideLoading()}}),n),h=()=>{n.close()},d=(t,o,s)=>new Promise(e=>{n.fire({title:t,text:o,icon:"warning",showCancelButton:!0,confirmButtonText:"確認",confirmButtonColor:"#F4BD80",textColor:"#FFFF",cancelButtonColor:"#FFFF",cancelButtonText:"取消",...s}).then(B=>{B.isConfirmed?e(!0):e(!1)})}),r=(t,o)=>new Promise(s=>{n.fire({title:t,showCancelButton:!1,showConfirmButton:!1,html:`
          <div class="d-flex justify-center gap-4">
            ${o.map(e=>`
              <button 
                class="swal2-confirm swal2-styled" 
                style="background-color: ${e.color||"#F4BD80"};"
                onclick="window._customButtonClick('${e.value}')"
              >
                ${e.text}
              </button>
            `).join("")}
          </div>
        `,didOpen:()=>{window._customButtonClick=e=>{n.close(),s(e)}}})});return{showOk:l,showSuccess:c,showError:i,showFetchError:f,showLoading:m,hideLoading:h,showConfirm:d,showAuthOnly:w,showCustomButtons:r,showInfo:a}};export{F as u};
