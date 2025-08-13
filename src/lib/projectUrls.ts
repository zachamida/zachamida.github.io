// Mapping of project IDs to their original external URLs for content fetching
export const getOriginalProjectUrl = (projectId: string): string | null => {
  const urlMap: Record<string, string> = {
    'maintenance-planning': 'https://zachamida.github.io/pages/PMA_page.html',
    'infrastructure-deterioration': 'https://zachamida.github.io/pages/SHM_page.html',
    'oil-field-planning': 'https://zachamida.github.io/pages/WPO_page.html'
  };
  
  return urlMap[projectId] || null;
};

// Check if a project can have its content fetched
export const canFetchProjectContent = (projectId: string): boolean => {
  return getOriginalProjectUrl(projectId) !== null;
};
