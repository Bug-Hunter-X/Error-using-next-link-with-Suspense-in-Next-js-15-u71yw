```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href='/about' legacyBehavior>
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```