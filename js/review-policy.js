// The author-supplied repository is the only approved external review link.
export const ANONYMOUS_CODE_URL = 'https://anonymous.4open.science/r/UserArena-D877';

export function isApprovedReviewUrl(value) {
  try {
    const url = new URL(value);
    return url.href.replace(/\/$/, '') === ANONYMOUS_CODE_URL;
  } catch {
    return false;
  }
}
