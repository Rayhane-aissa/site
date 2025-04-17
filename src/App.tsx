import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, Brain, BarChart as ChartBar, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-teal-50">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="space-y-8">
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 hover:text-pink-600 transition-colors">
                Sarah Anderson
              </h1>
              <p className="text-xl text-purple-600 max-w-2xl mx-auto">
                Data Scientist | Machine Learning Engineer | AI Researcher
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Github className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Brain className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate data scientist with expertise in machine learning, statistical analysis, and deep learning. 
              I specialize in turning complex data into actionable insights and building AI-driven solutions 
              that solve real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Data Science</h3>
                <p className="text-gray-600">Python, R, TensorFlow, PyTorch, scikit-learn, Pandas, NumPy</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Analytics</h3>
                <p className="text-gray-600">SQL, Tableau, Power BI, A/B Testing, Statistical Analysis</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Cloud & Tools</h3>
                <p className="text-gray-600">AWS, Docker, Git, MLflow, Kubernetes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <ChartBar className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Customer Churn Prediction</h3>
                <p className="text-gray-600 mb-4">Machine learning model to predict customer churn with 92% accuracy</p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-pink-600 hover:text-pink-700 inline-flex items-center">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sentiment Analysis API</h3>
                <p className="text-gray-600 mb-4">Deep learning model for real-time sentiment analysis of social media data</p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-pink-600 hover:text-pink-700 inline-flex items-center">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Time Series Forecasting</h3>
                <p className="text-gray-600 mb-4">Sales forecasting model using LSTM networks and Prophet</p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-pink-600 hover:text-pink-700 inline-flex items-center">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Database className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl font-bold text-gray-900">Let's Connect</h2>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-50 to-pink-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">© 2024 Sarah Anderson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;