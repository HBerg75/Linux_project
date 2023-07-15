#!/bin/bash

# Function qui affiche un message d'erreur et termine le script
exit_with_error() {
  echo "Error: $1"
  exit 1
}

# Verifie si des arguments sont fournis
if [ $# -ge 2 ]; then
  # Si deux arguments sont fournis, on les utilise directement
  date_param=$1
  backup_dir=$2
else
  # Si aucun argument n'est fourni, on demande a l'utilisateur de les saisir
  read -p "Enter the date in the format YEAR-MONTH-DAY (e.g., 2023-07-15): " date_param
  [ -z "$date_param" ] && exit_with_error "Missing date"

  read -p "Enter the backup directory path: " backup_dir
  [ -z "$backup_dir" ] && exit_with_error "Missing backup directory path"
fi

# Verifie si la date est valide
if [[ ! $date_param =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
  exit_with_error "Invalid date format"
fi

# Verifie si le repertoire de backup existe
if [ ! -d "$backup_dir" ]; then
  echo "The backup directory doesn't exist. Creating it..."
  mkdir -p "$backup_dir" || exit_with_error "Failed to create the backup directory"
fi

# Synchronise le code source
rsync -av --delete /usr/share/nginx/html/ "$backup_dir/$date_param" || exit_with_error "Failed to sync the source code"

echo "Backup successful!"
