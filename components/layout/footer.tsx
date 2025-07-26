export function Footer() {
  return (
    <footer className="qf-section relative qf-gradient-deep-void py-12 text-center text-gray-400 font-mono text-sm">
      <div className="qf-container">
        <p>&copy; {new Date().getFullYear()} Quantflow. All rights reserved.</p>
        <p className="mt-2">Designed for advanced data processing.</p>
      </div>
    </footer>
  )
}
