### **SWE NOMAD**
A minimalist and responsive **remote job listing website** that fetches and displays real-time job opportunities for **engineers** in the **USA**.  

Built using **HTML, CSS, and JavaScript**, this project provides a clean, user-friendly interface with remote job listings, responsive design, and interactive elements for better usability.  

---

## **📌 Project Development Steps**  

### **0️⃣ Web Design (Planning & Wireframing)**  
- Define the structure and layout using **wireframes**.  
- Choose a **minimalist** design with a focus on readability and simplicity.  
- Plan a **color scheme** and typography.  

### **1️⃣ Create HTML Basic Structure**  
- Use **semantic HTML5** tags for better accessibility and SEO.  
- Add a **hero section** with a picture and brief introduction.  
- Implement a **table structure** for job listings.  

### **2️⃣ CSS Styling**  
- Apply **base styling** for a clean, professional look.  
- Use **CSS Grid / Flexbox** for layout organization.  
- Reset **browser default styles** for consistency.  

### **3️⃣ JavaScript for API Data Fetching**  
- Fetch **remote job listings** from `https://jobicy.com/api/v2/remote-jobs`.  
- Display job listings dynamically in a **table format**.  
- Implement error handling for **API failures**.  

### **4️⃣ Additional Enhancements & Features**  
✅ **Add timestamp** for each job listing to show how recent they are.  
✅ **CSS refinement**: Improve spacing, colors, and typography.  
✅ **Responsive design**: Ensure the website adapts to **mobile, tablet, and desktop** views.  
✅ **Add mouse events** (e.g., hover effects for job listings).  
✅ **Enhance SEO & Link Previews**:  
   - Include `<meta>` tags for **title, description, Open Graph (OG) metadata** for **better link previews** on social media.  
✅ **Analytics Tracking**:  
   - Integrate **Google Analytics** or another tracking tool to monitor user engagement.  

### **5️⃣ Testing**  
- Test on **different browsers** (Chrome, Firefox, Edge, Safari).  
- Validate **mobile responsiveness** using **DevTools**.  
- Check for **broken links or missing data**.  

### **6️⃣ CI/CD Action Setup (Automation)**  
- Set up **GitHub Actions** for **automatic deployment**.  
- Implement **CI/CD pipelines** for future updates.  
- Deploy the project using **GitHub Pages / Vercel / Netlify**.  

---

## **📂 Technologies Used**  
- **HTML5** (semantic structure)  
- **CSS3** (responsive design using Grid & Flexbox)  
- **JavaScript** (fetch API, DOM manipulation)  
- **GitHub Actions** (CI/CD setup)  
- **Google Analytics** (optional for tracking)  

---

## **How to Run This Project Locally**  

1️⃣ **Clone the Repository:**  
```bash
git clone hhttps://github.com/violachyu/cs5356-gitpage.git
```
  
2️⃣ **Open the HTML File Directly**  
```bash
open index.html  # macOS/Linux  
start index.html  # Windows  
```

3️⃣ **Run a Local Server (Optional, for API Fetching)**  
```bash
python -m http.server 8000  # Python 3  
http-server  # If using Node.js  
```
Then, visit: **http://localhost:8000**  

---

## **📌 Future Enhancements**
- Add **job filters** by category, experience level, and salary range.  
- Implement **dark mode toggle**.  
- Enable **user job bookmarking** and sharing features.  

📢 **Contributions Welcome!** Feel free to fork, improve, and submit pull requests. 🚀  