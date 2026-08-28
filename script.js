public class PesanCinta {

    static class Pasangan {
        private String nama;
        private boolean bahagia;

        public Pasangan(String nama) {
            this.nama = nama;
            this.bahagia = true;
        }

        public void cintai() {
            while (bahagia) {
                System.out.println("Menyayangi " + nama + " ... (Status: Infinity & Beyond)");
                break; 
            }
        }
    }

    public static void main(String[] args) {
        String namaCewe = "Kamu"; // Ganti dengan nama pacar/gebetanmu

        Pasangan favoritku = new Pasangan(namaCewe);

        System.out.println("=== EXECUTING LOVE_STORY.EXE ===");
        
        try {
            favoritku.cintai();
            System.out.println("\n[Success]: Terima kasih sudah ada dan mewarnai hariku!");
        } catch (Exception e) {
            System.out.println("Error: Cinta ini terlalu besar untuk ditampung memori.");
        }
    }
}
