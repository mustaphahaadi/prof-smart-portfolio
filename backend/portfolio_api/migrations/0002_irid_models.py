from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_api', '0001_initial'),
    ]

    operations = [
        # Enhance existing models
        migrations.AddField(
            model_name='researcharea',
            name='icon',
            field=models.CharField(default='beaker', max_length=50),
        ),
        migrations.AddField(
            model_name='researchproject',
            name='status',
            field=models.CharField(choices=[('ongoing', 'Ongoing'), ('completed', 'Completed'), ('planned', 'Planned')], default='ongoing', max_length=20),
        ),
        migrations.AddField(
            model_name='researchproject',
            name='funding_source',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='researchproject',
            name='funding_amount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='researchproject',
            name='collaborators',
            field=models.JSONField(blank=True, default=list),
        ),
        migrations.AddField(
            model_name='researchproject',
            name='location',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='publication',
            name='conference',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='publication',
            name='book',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='publication',
            name='publisher',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='publication',
            name='volume',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='publication',
            name='issue',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='publication',
            name='pages',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='publication',
            name='abstract',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='publication',
            name='keywords',
            field=models.JSONField(blank=True, default=list),
        ),
        migrations.AddField(
            model_name='publication',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='publication',
            name='research_area',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='publications', to='portfolio_api.researcharea'),
        ),
        migrations.AddField(
            model_name='news',
            name='excerpt',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='news',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='news/'),
        ),
        migrations.AddField(
            model_name='researchcollaboration',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='researchcollaboration',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='researchcollaboration',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resource',
            name='download_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='blogcategory',
            name='slug',
            field=models.SlugField(default='', max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='blogpost',
            name='featured',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='view_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='event',
            name='type',
            field=models.CharField(choices=[('conference', 'Conference'), ('workshop', 'Workshop'), ('seminar', 'Seminar'), ('lecture', 'Guest Lecture'), ('meeting', 'Meeting'), ('other', 'Other')], default='other', max_length=20),
        ),
        migrations.AddField(
            model_name='event',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='events/'),
        ),
        migrations.AddField(
            model_name='event',
            name='organizer',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='event',
            name='is_virtual',
            field=models.BooleanField(default=False),
        ),
        
        # Create new IRID models
        migrations.CreateModel(
            name='IRIDInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Institute of Research, Innovation and Development', max_length=255)),
                ('short_name', models.CharField(default='IRID', max_length=50)),
                ('description', models.TextField()),
                ('mission', models.TextField()),
                ('vision', models.TextField()),
                ('logo', models.ImageField(blank=True, null=True, upload_to='irid/')),
                ('established_year', models.IntegerField()),
                ('address', models.TextField()),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('website', models.URLField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'IRID Information',
                'verbose_name_plural': 'IRID Information',
            },
        ),
        migrations.CreateModel(
            name='IRIDTeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('role', models.CharField(choices=[('director', 'Director'), ('deputy_director', 'Deputy Director'), ('researcher', 'Senior Researcher'), ('assistant', 'Research Assistant'), ('admin', 'Administrative Staff'), ('other', 'Other')], max_length=20)),
                ('bio', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='irid/team/')),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(blank=True, max_length=20)),
                ('order', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['order', 'name'],
            },
        ),
        migrations.CreateModel(
            name='IRIDProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(max_length=255, unique=True)),
                ('description', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='irid/projects/')),
                ('status', models.CharField(choices=[('ongoing', 'Ongoing'), ('completed', 'Completed'), ('planned', 'Planned')], default='ongoing', max_length=20)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('funding_source', models.CharField(blank=True, max_length=255)),
                ('funding_amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('external_collaborators', models.JSONField(blank=True, default=list)),
                ('outcomes', models.TextField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('publications', models.ManyToManyField(blank=True, related_name='irid_projects', to='portfolio_api.publication')),
                ('team_members', models.ManyToManyField(blank=True, related_name='projects', to='portfolio_api.iridteammember')),
            ],
            options={
                'ordering': ['-start_date'],
            },
        ),
        migrations.CreateModel(
            name='IRIDAchievement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('date', models.DateField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='irid/achievements/')),
                ('icon', models.CharField(default='award', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
        migrations.CreateModel(
            name='IRIDPartner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('type', models.CharField(choices=[('academic', 'Academic Institution'), ('industry', 'Industry Partner'), ('government', 'Government Agency'), ('ngo', 'Non-Governmental Organization'), ('international', 'International Organization'), ('other', 'Other')], max_length=20)),
                ('description', models.TextField()),
                ('logo', models.ImageField(blank=True, null=True, upload_to='irid/partners/')),
                ('website', models.URLField(blank=True, null=True)),
                ('partnership_start', models.DateField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='IRIDPublication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_featured', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='attributed_publications', to='portfolio_api.iridproject')),
                ('publication', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='irid_attribution', to='portfolio_api.publication')),
            ],
        ),
        migrations.CreateModel(
            name='CitationMetrics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('total_citations', models.IntegerField()),
                ('h_index', models.IntegerField()),
                ('i10_index', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Citation Metrics',
                'ordering': ['-year'],
            },
        ),
    ]