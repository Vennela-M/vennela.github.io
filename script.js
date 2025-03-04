// Page content templates
const pageContents = {
    about: `
        <h2>About</h2>
        <div class="underline"></div>
        <p>I'm an AI/ML Engineer pursuing Bachelor of Technology in Artificial Intelligence. I'm passionate about solving complex problems using AI and analytics, working to create innovative solutions that make a difference.</p>
        
        <h3>What I Do!</h3>
        <div class="services-grid">
            <div class="service-card">
                <i class="fas fa-code"></i>
                <h4>AI Development</h4>
                <p>Developing intelligent solutions using machine learning and deep learning technologies.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-chart-bar"></i>
                <h4>Data Analytics</h4>
                <p>Analyzing complex datasets to derive meaningful insights and patterns.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-robot"></i>
                <h4>ML Engineering</h4>
                <p>Building and deploying machine learning models for real-world applications.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-database"></i>
                <h4>Data Engineering</h4>
                <p>Creating robust data pipelines and infrastructure for AI applications.</p>
            </div>
        </div>
    `,
    projects: `
        <h2>Projects</h2>
        <div class="underline"></div>
        <div class="projects-grid">
            <!-- Add your projects here -->
        </div>
    `,
    blogs: `
        <h2>Blogs</h2>
        <div class="underline"></div>
        <div class="blogs-container">
            <!-- Add your blog posts here -->
        </div>
    `,
    contact: `
        <h2>Contact</h2>
        <div class="underline"></div>
        <div class="contact-form">
            <form>
                <div class="form-group">
                    <input type="text" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <textarea placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    `
};

// Load initial content
document.addEventListener('DOMContentLoaded', function() {
    // Load initial page
    loadPage('about');
    
    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            // Load content
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    // CV download handling
    document.querySelector('.download-cv').addEventListener('click', function(e) {
        e.preventDefault();
        alert('CV download functionality will be implemented here');
    });
});

function loadPage(pageName) {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = pageContents[pageName];
}

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration
    particlesJS('particles-container', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.3,
                    sync: false
                }
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    out: "out"
                }
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.5
                    }
                }
            }
        },
        retina_detect: true
    });
});