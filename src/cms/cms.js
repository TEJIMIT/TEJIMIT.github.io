import CMS from 'netlify-cms';
import PressPostPreview from './preview-templates/PressPostPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('press', PressPostPreview);
