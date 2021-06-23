using System;
using System.ComponentModel.DataAnnotations;

namespace RetenionApp.Models
{
    public class User
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public DateTime Registration { get; set; }

        [Required]
        public DateTime LastActive { get; set; }

    }
}
