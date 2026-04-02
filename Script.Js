let isAr = false;

function toggleLanguage() {
    const html = document.documentElement;
    const title = document.getElementById('mainTitle');
    const bText = document.getElementById('btnText');
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const input = document.getElementById('searchInput');

    if (!isAr) {
        html.dir = "rtl";
        title.innerText = "منصة تصديق هي منصة رقمية تتيح التحقق الفوري من 'وثيقتك الرقمية الموثوقة'. فهي تتحقق من صحة وسلامة وصلاحية الوثيقة من المصدر الرسمي.";
        bText.innerText = "بحث";
        b1.innerText = "آمن";
        b2.innerText = "ضد التلاعب";
        b3.innerText = "وقت حقيقي";
        input.placeholder = "ابحث هنا...";
        isAr = true;
    } else {
        location.reload(); // العودة للأصل
    }
}

function executeSearch() {
    const code = document.getElementById('searchInput').value;
    const mainUI = document.getElementById('main-ui');

    if (code === "29211161200212") {
        window.location.href = "details.html";
    } else {
        mainUI.innerHTML = `
            <div style="text-align:center; margin-top:50px;">
                <h1 style="color:#777;">This number can't found</h1>
                <button class="custom-btn" style="max-width:200px; margin:0 auto;" onclick="location.reload()">Back</button>
            </div>
        `;
    }
}
