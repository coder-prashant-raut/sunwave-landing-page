export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">Empowering India with Solar Energy</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Solar Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}
