# How to Add Your Project Images

## Quick Guide to Replace Placeholder Images

### Option 1: Using Image Hosting Services (Recommended)

1. **Upload your images to an image hosting service:**
   - [Imgur](https://imgur.com) - Free, no account needed
   - [Cloudinary](https://cloudinary.com) - Free tier available
   - [ImgBB](https://imgbb.com) - Free image hosting

2. **Get the direct image URLs** (should end with .jpg, .png, etc.)

3. **Replace the placeholder URLs in `src/components/Projects.tsx`:**

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'AIBI Africa - Innovation Platform',
    category: 'theme',
    description: '...',
    images: [
      'YOUR_AIBI_IMAGE_1_URL_HERE',  // Replace this
      'YOUR_AIBI_IMAGE_2_URL_HERE',  // Replace this
      'YOUR_AIBI_IMAGE_3_URL_HERE'   // Replace this
    ],
    link: 'https://aibiafrica.com',
    // ...
  },
  // ... other projects
];
```

### Option 2: Using Local Images

1. **Create an images folder:**
   - Create folder: `src/assets/projects/`

2. **Add your images to this folder:**
   ```
   src/assets/projects/
   ├── aibi-1.jpg
   ├── aibi-2.jpg
   ├── aibi-3.jpg
   ├── blucube-1.jpg
   ├── blucube-2.jpg
   ├── blucube-3.jpg
   ├── amrusad-1.jpg
   ├── amrusad-2.jpg
   └── amrusad-3.jpg
   ```

3. **Import and use them in `Projects.tsx`:**

```typescript
// Add these imports at the top
import aibi1 from '../assets/projects/aibi-1.jpg';
import aibi2 from '../assets/projects/aibi-2.jpg';
import aibi3 from '../assets/projects/aibi-3.jpg';
// ... import other images

// Then use them in the projects array
const projects: Project[] = [
  {
    id: 1,
    title: 'AIBI Africa - Innovation Platform',
    images: [aibi1, aibi2, aibi3],
    // ...
  },
];
```

## Current Project Structure

You have 3 projects set up:

1. **AIBI Africa** - Innovation Platform (Theme)
2. **BluCube Tech** - Tech Services (Theme)
3. **Amrusad** - E-Commerce (WooCommerce)

Each project needs 3 images for the slider.

## Tips for Best Results

- **Image Size:** Use images around 1200x800px for best quality
- **Format:** JPG or PNG work best
- **Optimization:** Compress images before uploading (use tinypng.com)
- **Consistency:** Try to use similar aspect ratios for all images

## Adding More Projects

To add more projects, simply add a new object to the `projects` array:

```typescript
{
  id: 4,  // Increment the ID
  title: 'Your Project Name',
  category: 'theme', // or 'plugin' or 'woocommerce'
  description: 'Your project description',
  images: [
    'image1-url',
    'image2-url',
    'image3-url'
  ],
  link: 'https://yourproject.com',
  technologies: ['WordPress', 'PHP', 'JavaScript'],
  features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
}
```

## Slider Features

✅ Automatic image transitions
✅ Navigation arrows (appear on hover)
✅ Dot indicators for each slide
✅ Click dots to jump to specific slides
✅ Smooth fade transitions
✅ "View Live Site" button overlay

## Need Help?

If you need to add more slides per project or customize the slider behavior, edit:
- `src/components/Projects.tsx` - Component logic
- `src/components/Projects.css` - Slider styling

