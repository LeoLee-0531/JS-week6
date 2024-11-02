let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

// 新增資料
const addTicketBtn = document.querySelector(".addTicket-btn");
addTicketBtn.addEventListener("click", function (e) {
  e.preventDefault(); // 阻止表單預設提交行為

  let id = data.length - 1;
  let ticketName = document.querySelector("#ticketName").value;
  let image = document.querySelector("#ticketImgUrl").value;
  let area = document.querySelector("#ticketRegion").value;
  let description = document.querySelector("#ticketDescription").value;
  let group = document.querySelector("#ticketNum").value;
  let price = document.querySelector("#ticketPrice").value;
  let rate = document.querySelector("#ticketRate").value;

  if (
    ticketCard == "" ||
    image == "" ||
    area == "" ||
    description == "" ||
    group == "" ||
    price == "" ||
    rate == ""
  ) {
    alert("請輸入完整資訊");
    return;
  } else {
    let obj = {
      id: id,
      name: ticketName,
      imgUrl: image,
      area: area,
      description: description,
      group: group,
      price: price,
      rate: rate,
    };

    data.push(obj);
    updateData();
    alert("新增成功");

    // 清空輸入框
    ticketName.value = "";
    image.value = "";
    area.value = "";
    description.value = "";
    group.value = "";
    price.value = "";
    rate.value = "";
  }
});

// 更新渲染資料
const ticketCard = document.querySelector(".ticketCard-area");
function updateData() {
  let str = "";
  data.forEach(function (item) {
    str += `
    <li class="ticketCard-box align-self-stretch">
      <div class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img
              src="${item.imgUrl}"
              alt=""
            />
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${item.price}</span>
            </p>
          </div>
        </div>
      </li>
    </li>`;
  });

  ticketCard.innerHTML = str;
}
updateData();

const regionSelect = document.querySelector(".regionSearch");
regionSelect.addEventListener("change", function (e) {
  let region = e.target.value;
  let content = "";
  let dataNum = 0;

  data.forEach((item) => {
    if (region == "") {
      dataNum++;
      content += `
      <li class="ticketCard-box align-self-stretch">
        <div class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img
                src="${item.imgUrl}"
                alt=""
              />
            </a>
            <div class="ticketCard-region">${item.area}</div>
            <div class="ticketCard-rank">${item.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${item.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${item.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${item.price}</span>
              </p>
            </div>
          </div>
        </li>
      </li>`;
    } else if (region == item.area) {
      dataNum++;
      content += `
      <li class="ticketCard-box align-self-stretch">
        <div class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img
                src="${item.imgUrl}"
                alt=""
              />
            </a>
            <div class="ticketCard-region">${item.area}</div>
            <div class="ticketCard-rank">${item.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${item.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${item.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${item.price}</span>
              </p>
            </div>
          </div>
        </li>
      </li>`;
    }
  });
  ticketCard.innerHTML = content;

  const searchNum = document.querySelector("#searchResult-text");
  searchNum.innerHTML = `本次搜尋共 ${dataNum} 筆資料`;
});
